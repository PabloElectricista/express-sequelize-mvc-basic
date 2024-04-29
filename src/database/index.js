import Sequelize from "sequelize";
import config from "./config.js";

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    logging: false,
    dialect: "mysql",
  }
);

import { readdirSync } from "fs";
import * as url from "url";
const path_db = `${url.fileURLToPath(new URL(".", import.meta.url))}`;
const PATH_MODELS = path_db + "models";

readdirSync(PATH_MODELS).forEach((fileName) => {
  const name = fileName.split(".")[0];
  const capName = name[0].toUpperCase() + name.slice(1);
  import(`./models/${name}.js`)
    .then((model) => {
      model.default(sequelize);
    })
    .then(() => sequelize.models[capName].sync({ force: false }));
});
