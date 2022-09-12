const { productService } = require('../services');

const getProducts = (_req, res) => {
  const { message } = productService.getProducts();
  return res.status(200).json(message);
};

const getProductsById = (req, res) => {
  const { id } = req.params;
  const { type, message } = productService.getProductsById(id);
  if (type) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(message);
};

module.exports = {
  getProducts,
  getProductsById,
};
