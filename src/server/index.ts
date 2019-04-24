import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import "reflect-metadata";
import { ApolloServer } from 'apollo-server-express';
import schema from './schema/schema';

export interface Context {
  req: {
    session: {
      userId: string | undefined;
    }
  },
  res: {}
}

const startServer = async () => {
  const server = new ApolloServer({
    schema,
    context: ({ req, res }: Context) => ({ req, res })
  });

  const app = express();
  app.use(bodyParser.json());
  server.applyMiddleware({
    app, 
    path: '/api',
    cors: {
      origin: [
        'http://localhost:3000'
      ],
      credentials: true
    }
  });

  if (process.env.NODE_ENV === 'production') {
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
