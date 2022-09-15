const express = require('express');
const { productController } = require('../controllers');
const productMiddleware = require('../middlewares/product.middleware');

const router = express.Router();

router.get('/', productController.getProducts);

router.get('/:id', productController.getProductById);

router.post('/', productMiddleware, productController.addNewProduct);

module.exports = router;