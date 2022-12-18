require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DbUsername,
    password: process.env.DbPassword,
    database: process.env.DbDatabase,
    host: process.env.DbHost,
    dialect: process.env.DbDialect,
  },
  test: {
    username: process.env.DbUsername,
    password: process.env.DbPassword,
    database: process.env.DbDatabase,
    host: process.env.DbHost,
    dialect: process.env.DbDialect,
  },
  production: {
    username: process.env.DbUsername,
    password: process.env.DbPassword,
    database: process.env.DbDatabase,
    host: process.env.DbHost,
    dialect: process.env.DbDialect,
  },
};
