const { productModel } = require('../models');

const getProducts = async () => {
  const result = await productModel.findAll();
  console.log(result);
  return { type: null, message: result };
};

const getProductsById = async ({ id }) => {
  const result = await productModel.findById(id);
  console.log(result);

  if (result) return { type: null, message: result };
  return { type: 'NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  getProducts,
  getProductsById,
};