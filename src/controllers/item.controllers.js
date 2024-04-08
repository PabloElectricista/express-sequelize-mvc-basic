import { handleHTTP } from "../utils/errors.handle.js";
import { insertItem, removeItem, retrieveItem, retrieveItems, updateItem } from "../services/item.services.js";

const getItem = async (req, res) => {
  try {
    const retrievedItem = await retrieveItem(req.params.id);
    res.json({ item: retrievedItem })
  } catch (error) {
    handleHTTP(res, 'GET_ITEM: ' + error.message);
  }
}

const getItems = async (req, res) => {
  try {
    const allItems = await retrieveItems();
    res.json({ items: allItems })
  } catch (error) {
    handleHTTP(res, 'GET_ITEMS: ' + error.message);
  }
}

const postItem = async ({ body }, res) => {
  try {
    const newItem = await insertItem(body.item);
    res.json({ item: newItem })
  } catch (error) {
    handleHTTP(res, 'POST_ITEM: ' + error.message);
  }
}

const putItem = async (req, res) => {
  try {
    const updatedItem = await updateItem(req.params.id, req.body.item);
    res.json({ item: updatedItem })
  } catch (error) {
    handleHTTP(res, 'UPDATE_ITEM: ' + error.message);
  }
}

const deleteItem = async (req, res) => {
  try {
    const deletedItem = await removeItem(req.params.id);
    res.json({ item: deletedItem })
  } catch (error) {
    handleHTTP(res, 'DELETE_ITEM: ' + error.message);
  }
}

export {
  getItem,
  getItems,
  postItem,
  putItem,
  deleteItem
};
