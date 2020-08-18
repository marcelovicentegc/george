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
  database: DB_DATABASE,
  host: DB_HOST,
  password: DB_PASSWORD,
  port: DB_PORT,
  username: DB_USERNAME,
  dropSchema: !isProduction,
  synchronize: !isProduction,
  logging: !isProduction,
  entities: ["src/server/database/**/*.model.ts"],
  migrations: ["src/server/database/migrations/*.ts"],
  cli: {
    entitiesDir: "src/server/database/entitites",
  },
};
