const { saleService } = require('../services');

const addNewSales = async (req, res) => {
  const { body } = req;
  const { message } = await saleService.addNewSales(body);
  return res.status(201).json(message);
};

module.exports = {
  addNewSales,
};
