module.exports = {
  type: "sqlite",
  database: "./src/server/database/db.sqlite3",
  dropSchema: true,
  synchronize: true,
  logging: false,
  entities: ["src/server/database/**/*.model.ts"],
  cli: {
    entitiesDir: "src/server/database/entitites"
  }
};
