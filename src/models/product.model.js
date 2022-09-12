const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  console.log(result);
  return result;
};

const findById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?', [productId],
  );
  console.log(result);
  return result;
};

module.exports = {
  findAll,
  findById,
};
