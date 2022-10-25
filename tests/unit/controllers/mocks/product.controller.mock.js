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

// getProductByQuery mock values
const getProductByQuerySuccessReturn = {
  type: null,
  message: [
    {
      "id": 1,
      "name": "Martelo de Thor"
    }
  ]
}

// addNewProduct mock values
const addNewProductSuccessReturn = {
  type: null,
  message: {
    "id": 4,
    "name": "ProdutoX"
  }
}

// updateProduct mock values
const updateProductInput = {
  "name": "Martelo do Batman"
}

const updateProductSuccessReturn = {
  type: null,
  message: {
    "id": 1,
    "name": "Martelo do Batman"
  }
}

const updateProductErrorReturn = { type: 'NOT_FOUND', message: 'Product not found' }

// deleteProduct mock values
const deleteProductSuccessReturn = { type: null };

const deleteProductErrorReturn = { type: 'NOT_FOUND', message: 'Product not found' }


module.exports = {
  getProductsReturn,
  getProductByIdSucessReturn,
  getProductByIdErrorReturn,
  getProductByQuerySuccessReturn,
  addNewProductSuccessReturn,
  updateProductInput,
  updateProductSuccessReturn,
  updateProductErrorReturn,
  deleteProductSuccessReturn,
  deleteProductErrorReturn,
}