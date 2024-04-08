import { Router } from "express";
import {
  getItem,
  getItems,
  postItem,
  putItem,
  deleteItem
} from "../controllers/item.controllers.js";

const router = Router();

router.get("/:id", getItem);

router.get("/", getItems);

router.post("/", postItem);

router.put("/:id", putItem);

router.delete("/:id", deleteItem);

export default router;
