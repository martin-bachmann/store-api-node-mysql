const { productModel } = require('../models');

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
  const insertId = await productModel.insert(product);
  return { type: null, message: { id: insertId, ...product } };
};

const updateProduct = async (productId, name) => {
  const result = await productModel.findById(productId);
  if (!result) return { type: 'NOT_FOUND', message: 'Product not found' };
  await productModel.updateById(productId, name);
  return { type: null, message: { id: productId, name } };
};

module.exports = {
  getProducts,
  getProductById,
  addNewProduct,
  updateProduct,
};