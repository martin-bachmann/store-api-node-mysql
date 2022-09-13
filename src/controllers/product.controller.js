const { productService } = require('../services');

const getProducts = async (_req, res) => {
  const { message } = await productService.getProducts();
  console.log('retorno');
  console.log(message);
  return res.status(200).json(message);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productService.getProductsById({ id });
  console.log('retorno');
  console.log(type);
  console.log(message);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  getProducts,
  getProductsById,
};
