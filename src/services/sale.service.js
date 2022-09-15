const { saleModel, productModel } = require('../models');

const validateProducts = async (sales) => {
  const products = await productModel.findAll();
  for (let i = 0; i < sales.length; i += 1) {
    if (products.every(({ id }) => id !== sales[i].productId)) return true;
  }
  return false;
};

const addNewSales = async (sales) => {
  if (await validateProducts(sales)) return { type: 'NOT_FOUND', message: 'Product not found' };  
  const insertId = await saleModel.insert(sales);
  return { type: null, message: { id: insertId, itemsSold: sales } };
};

module.exports = {
  addNewSales,
};
