import { sequelize } from '../database/index.js'
const { Item } = sequelize.models

const insertItem =  (item) => {
  return  Item.create(item);
};

const retrieveItems = async () => {
  return  await Item.findAll();
};

const retrieveItem =  (id) => {
  return  `Item retrieved ${id}`;
};

const updateItem =  (id, item) => {
  return  `Item updated`;
};

const removeItem =  (id) => {
  return  `Item deleted`;
}

export {
  insertItem,
  retrieveItems,
  retrieveItem,
  updateItem,
  removeItem
};
