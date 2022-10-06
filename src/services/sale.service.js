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

const updateSale = async (saleId, sales) => {
  const result = await saleModel.findById(saleId);
  if (!result) return { type: 'NOT_FOUND', message: 'Sale not found' };
  await saleModel.updateById(saleId, sales);
  return { type: null, message: { saleId, itemsUpdated: sales } };
};

const deleteSale = async (saleId) => {
  const [result] = await saleModel.findById(saleId);
  if (!result) return { type: 'NOT_FOUND', message: 'Sale not found' };
  const response = await saleModel.deleteById(saleId);
  return { type: null, message: response };
};

module.exports = {
  getSales,
  getSaleById,
  addNewSales,
  updateSale,
  deleteSale,
};
