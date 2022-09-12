const { productModel } = require('../models');

const getProducts = async () => {
  const result = await productModel.findAll();
  return { type: null, message: result };
};

const getProductsById = async ({ productId }) => {
  const result = await productModel.findById(productId);
  return { type: null, message: result };
};

module.exports = {
  getProducts,
  getProductsById,
};