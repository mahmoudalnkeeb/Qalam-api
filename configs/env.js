require('dotenv').config();

const env =
  process.env.ENV == 'dev'
    ? {
        port: 4000,
      }
    : {
        port: process.env.PORT,
      };

module.exports = env