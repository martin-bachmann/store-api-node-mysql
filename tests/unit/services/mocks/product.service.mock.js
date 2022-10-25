// getAllProducts mock values
const findAllReturn = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  }
]

// getProductById mock values
const findByIdSuccessReturn = {
  "id": 1,
  "name": "Martelo de Thor"
}

const findByIdErrorReturn = undefined;

const getProductByIdErrorReturn = { type: 'NOT_FOUND', message: 'Product not found' }

// getProductByQuery mock values
const findByQuerySuccessReturn = 
  [
    {
      "id": 1,
      "name": "Martelo de Thor"
    }
  ]


// addNewProduct mock values
const insertSuccessReturn = 4

// updateProduct mock values
const updateByIdSuccessReturn = 
  {
    "name": "Martelo de Thor"
  }
  
// deleteProduct mock values
const deleteByIdSuccessReturn = 
  {
    "name": "Martelo de Thor"
}
  
module.exports = {
  findAllReturn,
  findByIdSuccessReturn,
  findByIdErrorReturn,
  getProductByIdErrorReturn,
  findByQuerySuccessReturn,
  insertSuccessReturn,
  updateByIdSuccessReturn,
  deleteByIdSuccessReturn,
}