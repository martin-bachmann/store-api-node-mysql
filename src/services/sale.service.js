const { saleModel } = require('../models');

const addNewSales = async (sales) => {
  const insertId = await saleModel.insert(sales);
  return { type: null, message: { id: insertId, itemsSold: sales } };
};

module.exports = {
  addNewSales,
};
