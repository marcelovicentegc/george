import * as Redis from "redis";
import { redisPort, redisHost } from "./config";

export const redis = Redis.createClient({
  host: redisHost,
  port: redisPort,
});
