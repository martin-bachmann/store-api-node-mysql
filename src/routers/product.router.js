const express = require('express');
const { productController } = require('../controllers');
const productMiddleware = require('../middlewares/product.middleware');

const router = express.Router();

router.get('/', productController.getProducts);

router.get('/search', productController.getProductByQuery);

router.get('/:id', productController.getProductById);

router.post('/', productMiddleware, productController.addNewProduct);

router.put('/:id', productMiddleware, productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;