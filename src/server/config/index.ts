const {
  NODE_ENV,
  BROKER_PORT,
  SERVER_PORT,
  CLIENT_PORT,
  REDIS_SECRET,
} = process.env;

export const isProduction = NODE_ENV === "production";

export const brokerPort = Number(BROKER_PORT) || 1883;

export const serverPort = SERVER_PORT || 4000;

export const clientPort = CLIENT_PORT || 3000;

export const redisSecret =
  REDIS_SECRET || "b0187547-832d-4a6f-9101-b2dadb6025ae";
