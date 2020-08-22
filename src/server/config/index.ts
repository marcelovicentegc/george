const {
  NODE_ENV,
  BROKER_PORT,
  SERVER_PORT,
  CLIENT_PORT,
  REDIS_PORT,
  REDIS_HOST,
  SESSION_SECRET,
  USE_SQLITE,
} = process.env;

export const isProduction = NODE_ENV === "production";

export const brokerPort = Number(BROKER_PORT) || 1883;

export const serverPort = SERVER_PORT || 4000;

export const clientPort = CLIENT_PORT || 3000;

export const redisPort = Number(REDIS_PORT) || 6379;

export const redisHost = REDIS_HOST || "localhost";

export const sessionSecret =
  SESSION_SECRET || "b0187547-832d-4a6f-9101-b2dadb6025ae";

export const dbType = Boolean(USE_SQLITE) ? "sqlite" : "postgres";
