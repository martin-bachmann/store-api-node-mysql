// getAllProducts mock values
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

// getProductById mock values
const getProductByIdSucessReturn = {
  type: null,
  message: {
    "id": 1,
    "name": "Martelo de Thor"
  }
}

const getProductByIdErrorReturn = { type: 'NOT_FOUND', message: 'Product not found' }

// addNewProduct mock values
const addNewProductSuccessReturn = {
  type: null,
  message: {
    "id": 4,
    "name": "ProdutoX"
  }
}

module.exports = {
  getProductsReturn,
  getProductByIdSucessReturn,
  getProductByIdErrorReturn,
  addNewProductSuccessReturn,
}