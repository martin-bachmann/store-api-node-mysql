const { saleService } = require('../services');

const addNewSales = async (req, res) => {
  const { body } = req;
  const { type, message } = await saleService.addNewSales(body);
  if (type) return res.status(404).json({ message });
  return res.status(201).json(message);
};

module.exports = {
  addNewSales,
};
