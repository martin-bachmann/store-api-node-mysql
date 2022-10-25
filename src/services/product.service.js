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

const getProductByQuery = async (query) => {
  const result = query ? await productModel.findByQuery(query) : await productModel.findAll();
  return { type: null, message: result };
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

const deleteProduct = async (productId) => {
  const result = await productModel.findById(productId);
  if (!result) return { type: 'NOT_FOUND', message: 'Product not found' };
  const response = await productModel.deleteById(productId);
  return { type: null, message: response };
};

module.exports = {
  getProducts,
  getProductById,
  getProductByQuery,
  addNewProduct,
  updateProduct,
  deleteProduct,
};