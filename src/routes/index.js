import { Router } from "express";
import { readdirSync } from "fs";
import * as url from 'url';

const PATH_ROUTER = `${url.fileURLToPath(new URL('.', import.meta.url))}/`;
const router = Router();

const cleanFileName = (fileName) => {
  return fileName.split(".")[0];
};

readdirSync(PATH_ROUTER).forEach((fileName) => {
  if (fileName === "index.js") return;
  const name = cleanFileName(fileName);
  import(`./${name}.js`).then((moduleRouter) => {
    router.use(`/${name}`, moduleRouter.default);
  });
});

export default router;
