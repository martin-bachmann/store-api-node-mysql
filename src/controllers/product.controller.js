const { productService } = require('../services');

const getProducts = async (_req, res) => {
  const { message } = await productService.getProducts();
  return res.status(200).json(message);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getProductById({ id });
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  getProducts,
  getProductById,
};
