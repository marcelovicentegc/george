import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import "reflect-metadata";

const startServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(express.static(path.resolve("./dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("./dist/index.html"));
  });
  app.listen(8080, () => {
    console.log("Server is ready for requests on port 8080");
  });
};
startServer();
