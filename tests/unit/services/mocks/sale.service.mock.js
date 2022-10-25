// getAllSales mock values
const findAllSalesReturn = [
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 2
  }
]

// getSaleById mock values
const findByIdSaleSuccessReturn = [
  {
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 2
  }
]

const findByIdSaleErrorReturn = [];

const getSaleByIdErrorReturn = { type: 'NOT_FOUND', message: 'Sale not found' }

// updateSale mock values
const addNewSaleInput = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]

const addNewSaleErrorReturn = { type: 'NOT_FOUND', message: 'Product not found' }

const validateProductsFindAllSuccess = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  }
]

const validateProductsFindAllError = [];

module.exports = {
  findAllSalesReturn,
  findByIdSaleSuccessReturn,
  findByIdSaleErrorReturn,
  getSaleByIdErrorReturn,
  addNewSaleInput,
  addNewSaleErrorReturn,
  validateProductsFindAllSuccess,
  validateProductsFindAllError,
}
