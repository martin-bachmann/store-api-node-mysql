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

const addNewProduct = async (req, res) => {
  const { body } = req;
  const { message } = await productService.addNewProduct(body);
  return res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { type, message } = await productService.updateProduct(id, name);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.deleteProduct(id);
  if (type) return res.status(404).json({ message });
  return res.status(204).end();
};

module.exports = {
  getProducts,
  getProductById,
  addNewProduct,
  updateProduct,
  deleteProduct,
};
