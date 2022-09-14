const { productModel } = require('../models');
const { insert } = require('../models/product.model');

const getProducts = async () => {
  const result = await productModel.findAll();
  return { type: null, message: result };
};

const getProductById = async ({ id }) => {
  const result = await productModel.findById(id);
  if (result) return { type: null, message: result };
  return { type: 'NOT_FOUND', message: 'Product not found' };
};

const addNewProduct = async (product) => {
  const insertId = await insert(product);
  return { type: null, message: { id: insertId, ...product } };
};

module.exports = {
  getProducts,
  getProductById,
  addNewProduct,
};