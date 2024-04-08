import "dotenv/config";
import Sequelize from 'sequelize';

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

export const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/test`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

import { readdirSync } from "fs";
import * as url from 'url';

const path_db = `${url.fileURLToPath(new URL('.', import.meta.url))}`;
const PATH_MODELS = path_db.slice(0, path_db.length - 7) + "models";
console.log(PATH_MODELS);

// const cleanFileName = (fileName) => {
//   return fileName.split(".")[0];
// };

readdirSync(PATH_MODELS).forEach((fileName) => {
  const name = fileName.split(".")[0]; // cleanFileName(fileName);
  import(`../models/${name}.js`).then((model) => {
    model.default(sequelize)
  });
});
