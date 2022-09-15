const express = require('express');
const { saleController } = require('../controllers');
const saleMiddleware = require('../middlewares/sale.middleware');

const router = express.Router();

router.post('/', saleMiddleware, saleController.addNewSales);

module.exports = router;
