import * as bcrypt from "bcrypt";
import * as bodyParser from "body-parser";
import * as connectRedis from "connect-redis";
import * as express from "express";
import * as session from "express-session";
import * as mosca from "mosca";
import * as path from "path";
import "reflect-metadata";
import {
  createConnection,
  getConnectionOptions,
  ConnectionOptions,
} from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { User, Group, Profile } from "./database/entities";
import { redis } from "./redis";
import { schema } from "./schema";
import {
  serverPort,
  isProduction,
  brokerPort,
  clientPort,
  sessionSecret,
  redisPort,
} from "./config";
import { Context } from "./utils";
import { v1 } from "uuid";
import { Permission } from "./gql";

const log = console.log;

const startServer = async () => {
  let retries = 5;
  let connectionOptions: ConnectionOptions;

  while (retries) {
    if (isProduction) {
      connectionOptions = await getConnectionOptions();
      Object.assign(connectionOptions, {
        entities: ["dist/server/database/**/*.model.js"],
        cli: {
          entitiesDir: "dist/server/database/entities",
        },
      });
    }

    try {
      await createConnection(connectionOptions).then(() => {
        log("Connected to database");
      });

      if (!isProduction) {
        const group = Group.create({
          name: "Default",
          users: [],
          things: [],
        });
        await group.save();
        log("Default group created");

        const profile = Profile.create({
          avatarUrl: `https://avatars.dicebear.com/v2/jdenticon/${v1()}.svg`,
        });
        await profile.save();

        const hashedPassword = await bcrypt.hash("admin", 12);
        const user = User.create({
          username: "admin",
          password: hashedPassword,
          permission: Permission.Admin,
          group,
          profile,
        });

        await user.save();
        log("Default user created");

        group.users.push(user);
        await group.save();
        log("Linked default group to default user");
      }

      break;
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`${retries} retries left`);
      await new Promise((res) => setTimeout(res, 5000));
    }
  }

  const server = new ApolloServer({
    schema,
    context: ({ req, res }: Context) => ({ req, res }),
  });

  const app = express();

  const RedisStore = connectRedis(session);

  redis.on("ready", () => {
    log(`Redis is ready on port ${redisPort}`);
  });

  redis.on("error", (err) => log(err));

  app.use(bodyParser.json());
  app.use(
    session({
      store: new RedisStore({
        client: redis,
      }),
      secret: sessionSecret,
      resave: false,
      saveUninitialized: false,
    })
  );
  server.applyMiddleware({
    app,
    path: "/api",
    cors: {
      origin: [`http://localhost:${clientPort}`],
      credentials: true,
    },
  });

  const broker = new mosca.Server({
    port: brokerPort,
  });

  broker.on("ready", () => {
    log(`Broker is ready on port ${brokerPort}`);
  });

  if (isProduction) {
    app.use(express.static(path.resolve("./dist")));
    app.get("*", (_, res) => {
      res.sendFile(path.resolve("./index.html"));
    });
  }

  app.listen(serverPort, () => {
    log(`Server is ready for requests on port ${serverPort}`);
  });
};

startServer();
