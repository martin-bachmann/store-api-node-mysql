const { saleModel, productModel } = require('../models');

const getSales = async () => {
  const result = await saleModel.findAll();
  return { type: null, message: result };
};

const getSaleById = async ({ id }) => {
  const result = await saleModel.findById(id);
  if (result[0]) return { type: null, message: result };
  return { type: 'NOT_FOUND', message: 'Sale not found' };
};

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
  getSales,
  getSaleById,
  addNewSales,
};
