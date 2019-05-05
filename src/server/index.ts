import { ApolloServer } from "apollo-server-express";
import * as bcrypt from "bcrypt";
import * as bodyParser from "body-parser";
import * as connectRedis from "connect-redis";
import * as express from "express";
import * as session from "express-session";
import * as path from "path";
import "reflect-metadata";
import { createConnection, getConnectionOptions } from "typeorm";
import User from "./database/entities/User.model";
import { redis } from "./redis";
import schema from "./schema/schema";

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
  while (retries) {
    if (process.env.NODE_ENV === "production") {
      var connectionOptions = await getConnectionOptions();
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
        console.log("Connected to remote empty database");
      });

      if (process.env.NODE_ENV === "development") {
        const hashedPassword = await bcrypt.hash("pierre", 12);
        const user = User.create({
          username: "pierre",
          email: "pierre@example.com",
          password: hashedPassword
        });
        await user.save();
        console.log("Created default user nº1");
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

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve("./dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve("./dist/index.html"));
    });
  }

  app.listen(8080, () => {
    console.log("Server is ready for requests on port 8080");
  });
};
startServer();
