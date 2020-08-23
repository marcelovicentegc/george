const {
  NODE_ENV,
  PG_HOST,
  PG_PORT,
  PG_USERNAME,
  PG_PASSWORD,
  PG_DATABASE,
  DB_LOGGING,
  USE_SQLITE,
} = process.env;

const isProduction = NODE_ENV === "production";

const base = {
  dropSchema: !isProduction,
  synchronize: !isProduction,
  logging: Boolean(DB_LOGGING),
  entities: ["src/server/database/**/*.model.ts"],
  migrations: ["src/server/database/migrations/*.ts"],
  cli: {
    entitiesDir: "src/server/database/entitites",
  },
};

const postgres = {
  type: "postgres",
  database: PG_DATABASE || "postgres",
  host: PG_HOST || "localhost",
  password: PG_PASSWORD || "postgres",
  port: PG_PORT || 5432,
  username: PG_USERNAME || "postgres",
  ...base,
};

const sqlite = {
  type: "sqlite",
  database: "./src/server/database/db.sqlite3",
  ...base,
};

module.exports = Boolean(USE_SQLITE) ? sqlite : postgres;
