const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return result;
};

const findById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?', [productId],
  );
  return result;
};

const findByQuery = async (query) => {
  const [result] = await connection.execute(
    'SELECT * FROM products WHERE name LIKE ?', [`%${query}%`],
  );
  return result;
};

const insert = async (product) => {
  const columns = Object.keys(product)
    .map((key) => `${key}`)
    .join(', ');
  
  const placeholders = Object.keys(product)
    .map((_key) => '?')
    .join(', ');
  
  const [{ insertId }] = await connection.execute(
    `INSERT INTO products (${columns}) VALUE (${placeholders})`,
    [...Object.values(product)],
  );
  return insertId;
};

const updateById = async (productId, name) => {
  const response = await connection.execute(
    'UPDATE products SET `name` = ? WHERE id = ?',
    [name, productId],
  );
  return response;
};

const deleteById = async (productId) => {
  const response = await connection.execute(
    'DELETE FROM products WHERE id = ?',
    [productId],
  );
  return response;
};

module.exports = {
  findAll,
  findById,
  findByQuery,
  insert,
  updateById,
  deleteById,
};
