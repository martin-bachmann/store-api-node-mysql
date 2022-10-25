// getSales mock values
const getSalesReturn = {
  type: null,
  message: [
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
}

// getSaleById mock values
const getSaleByIdSuccessReturn = {
  type: null,
  message: [
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
}

const getSaleByIdErrorReturn = { type: 'NOT_FOUND', message: 'Sale not found' }

// addNewSales mock values
const addNewSalesInput = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]

const addNewSalesSuccessReturn = {
  type: null,
  message: {
    "id": 3,
    "itemsSold": [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ]
  }
}

const addNewSalesErrorReturn = { type: 'NOT_FOUND', message: 'Product not found' }

// updateSale mock values
const updateSaleInput = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]

const updateSaleSuccessReturn = {
  type: null,
  message: {
    "id": 1,
    "itemsSold": [
      {
        "productId": 1,
        "quantity": 10
      },
      {
        "productId": 2,
        "quantity": 50
      }
    ]
  }
}

const updateSaleErrorReturn = { type: 'NOT_FOUND', message: 'Sale not found' }

// deleteSale mock values
const deleteSaleSuccessReturn = { type: null };

const deleteSaleErrorReturn = { type: 'NOT_FOUND', message: 'Sale not found' }

module.exports = {
  getSalesReturn,
  getSaleByIdSuccessReturn,
  getSaleByIdErrorReturn,
  addNewSalesInput,
  addNewSalesSuccessReturn,
  addNewSalesErrorReturn,
  updateSaleInput,
  updateSaleSuccessReturn,
  updateSaleErrorReturn,
  deleteSaleSuccessReturn,
  deleteSaleErrorReturn
};
