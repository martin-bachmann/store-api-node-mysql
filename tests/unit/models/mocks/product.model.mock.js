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

// addNewProduct mock values
const insertSuccessReturn = {
  "insertId": 4,
}

module.exports = {
  findAllReturn,
  findByIdSuccessReturn,
  findByIdErrorReturn,
  insertSuccessReturn,
}