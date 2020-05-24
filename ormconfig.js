const { NODE_ENV } = process.env;

const isProduction = NODE_ENV === "production";

module.exports = {
  type: "sqlite",
  database: "./src/server/database/db.sqlite3",
  dropSchema: !isProduction,
  synchronize: !isProduction,
  logging: !isProduction,
  entities: ["src/server/database/**/*.model.ts"],
  cli: {
    entitiesDir: "src/server/database/entitites",
  },
};
