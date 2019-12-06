import { ApolloServer } from "apollo-server-express";
import * as bcrypt from "bcrypt";
import * as bodyParser from "body-parser";
import chalk from "chalk";
import * as connectRedis from "connect-redis";
import * as express from "express";
import * as session from "express-session";
import * as mosca from "mosca";
import * as path from "path";
import "reflect-metadata";
import {
  createConnection,
  getConnectionOptions,
  ConnectionOptions
} from "typeorm";
import Group from "./database/entities/Group.model";
import User from "./database/entities/User.model";
import { redis } from "./redis";
import { schema } from "./schema/schema";
const log = console.log;
const bgPink = chalk.bgRgb(255, 127, 255);
const bgBlue = chalk.bgRgb(0, 0, 255);
const bgCyan = chalk.bgRgb(127, 255, 255);

export interface Context {
  req: {
    session: {
      userId: string | undefined;
    };
  };
  res: {};
}

const startServer = async () => {
  let retries = 5;
  let connectionOptions: ConnectionOptions;

  while (retries) {
    if (process.env.NODE_ENV === "production") {
      connectionOptions = await getConnectionOptions();
      Object.assign(connectionOptions, {
        entities: ["dist/server/database/**/*.model.js"],
        cli: {
          entitiesDir: "dist/server/database/entities"
        },
        dropSchema: false
      });
    }

    try {
      await createConnection(connectionOptions).then(() => {
        log(bgPink("Connected to sqlite database"));
      });

      if (process.env.NODE_ENV === "development") {
        const group = await Group.create({
          name: "Default",
          users: [],
          things: []
        });
        await group.save();
        log(bgBlue("Created default group"));

        const hashedPassword = await bcrypt.hash("admin", 12);
        const user = await User.create({
          username: "admin",
          password: hashedPassword,
          group
        });

        await user.save();
        log(bgCyan("Created default user"));

        await group.users.push(user);
        await group.save();
        log(bgPink("Linked default group to default user"));
      }

      break;
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`${retries} retries left`);
      await new Promise(res => setTimeout(res, 5000));
    }
  }

  const server = new ApolloServer({
    schema,
    context: ({ req, res }: Context) => ({ req, res })
  });

  const app = express();

  const RedisStore = connectRedis(session);

  app.use(bodyParser.json());
  app.use(
    session({
      store: new RedisStore({
        client: redis as any
      }),
      secret: "shhhhhhhhhhhhhh",
      resave: false,
      saveUninitialized: false
    })
  );
  server.applyMiddleware({
    app,
    path: "/api",
    cors: {
      origin: ["http://localhost:3000"],
      credentials: true
    }
  });

  const broker = new mosca.Server({
    port: 1883
  });

  broker.on("ready", () => {
    log(bgBlue("Broker is ready on port 1883"));
  });

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve("./dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve("./dist/index.html"));
    });
  }

  app.listen(4000, () => {
    log(bgCyan("Server is ready for requests on port 4000"));
  });
};
startServer();
