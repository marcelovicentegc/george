const {
  NODE_ENV,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
} = process.env;

const isProduction = NODE_ENV === "production";

module.exports = {
  type: "postgres",
  database: DB_DATABASE || "postgres",
  host: DB_HOST || "localhost",
  password: DB_PASSWORD || "postgres",
  port: DB_PORT || 5432,
  username: DB_USERNAME || "postgres",
  dropSchema: !isProduction,
  synchronize: !isProduction,
  logging: !isProduction,
  entities: ["src/server/database/**/*.model.ts"],
  migrations: ["src/server/database/migrations/*.ts"],
  cli: {
    entitiesDir: "src/server/database/entitites",
  },
};
