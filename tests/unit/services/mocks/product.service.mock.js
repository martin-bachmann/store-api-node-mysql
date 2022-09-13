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


const findByIdSuccessReturn = {
  "id": 1,
  "name": "Martelo de Thor"
}


const findByIdErrorReturn = undefined;

const getProductByIdErrorReturn = { type: 'NOT_FOUND', message: 'Product not found' }

module.exports = {
  findAllReturn,
  findByIdSuccessReturn,
  findByIdErrorReturn,
  getProductByIdErrorReturn,
}