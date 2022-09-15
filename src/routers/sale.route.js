const express = require('express');
const { saleController } = require('../controllers');

const router = express.Router();

router.post('/', saleController.addNewSales);

module.exports = router;
