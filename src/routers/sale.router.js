const express = require('express');
const { saleController } = require('../controllers');
const saleMiddleware = require('../middlewares/sale.middleware');

const router = express.Router();

router.get('/', saleController.getSales);

router.get('/:id', saleController.getSaleById);

router.post('/', saleMiddleware, saleController.addNewSales);

router.delete('/:id', saleController.deleteSale);

module.exports = router;
