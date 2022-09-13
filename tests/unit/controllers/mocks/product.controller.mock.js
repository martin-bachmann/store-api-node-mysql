const getProductsReturn = {
  type: null,
  message: [
    {
      "id": 1,
      "name": "Martelo de Thor"
    },
    {
      "id": 2,
      "name": "Traje de encolhimento"
    }
  ]
}

const getProductByIdSucessReturn = {
  type: null,
  message: {
    "id": 1,
    "name": "Martelo de Thor"
  }
}

const getProductByIdErrorReturn = { type: 'NOT_FOUND', message: 'Product not found' }

module.exports = {
  getProductsReturn,
  getProductByIdSucessReturn,
  getProductByIdErrorReturn,
}