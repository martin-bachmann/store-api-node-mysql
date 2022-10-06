const { saleService } = require('../services');

const getSales = async (_req, res) => {
  const { message } = await saleService.getSales();
  return res.status(200).json(message);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await saleService.getSaleById({ id });
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

const addNewSales = async (req, res) => {
  const { body } = req;
  const { type, message } = await saleService.addNewSales(body);
  if (type) return res.status(404).json({ message });
  return res.status(201).json(message);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await saleService.deleteSale(id);
  if (type) return res.status(404).json({ message });
  return res.status(204).end();
};

module.exports = {
  getSales,
  getSaleById,
  addNewSales,
  deleteSale,
};
