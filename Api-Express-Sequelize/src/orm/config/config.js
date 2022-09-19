require('dotenv').config();

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
};

module.exports = {
  "development": {
    ...config,
    "database": process.env.DB_DATABASE
  },
  "test": {
    ...config,
    "database": process.env.DB_DATABASE_TEST
  },
  "production": {
    ...config,
    "database": process.env.DB_DATABASE_PRODUCTION
  },
}
