require('dotenv').config(); 

module.exports = {
  development: {
    username: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, 
    dialect: process.env.DB_DIALECT 
  },
  test: {
    username: process.env.DB_USER_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_NAME_TEST, 
    port: process.env.DB_PORT_TEST,
    dialect: process.env.DB_DIALECT_TEST
  },
  production: {
    username: process.env.DB_USER_PROD,
    password: process.env.DB_PASSWORD_PROD,
    database: process.env.DB_NAME_PROD,
    host: process.env.DB_HOST_PROD,
    port: process.env.DB_PORT_PROD,
    dialect: process.env.DB_DIALECT_PROD,
    dialectOptions: {
        ssl: {
          require: true, 
          rejectUnauthorized: false 
        }
      }
  }
};
