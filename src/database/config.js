import "dotenv/config";
let config

if(!process.env.NODE_ENV) {
  config = {
    username: process.env.DB_USERNAME_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_DATABASE_DEV,
    host: process.env.DB_HOST_DEV
  }
} else {
  config = {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1"
  }
}

export default config