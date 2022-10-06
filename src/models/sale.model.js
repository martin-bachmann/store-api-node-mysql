const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT p.sale_id, p.product_id, p.quantity, s.date 
    FROM sales_products AS p INNER JOIN sales AS s ON p.sale_id = s.id 
    ORDER BY sale_id, product_id`,
  );
  return camelize(result);
};

const findById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT p.product_id, p.quantity, s.date 
    FROM sales_products AS p INNER JOIN sales AS s ON p.sale_id = s.id 
    WHERE sale_id = ?`, [saleId],
  );
  return camelize(result);
};

const insert = async (sales) => {
  const columns = 'sale_id, product_id, quantity';
  const placeholders = '?, ?, ?';
  
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales VALUES ()',
  );

  sales.forEach(async (sale) => {
    await connection.execute(
      `INSERT INTO sales_products (${columns}) VALUE (${placeholders})`,
      [insertId, sale.productId, sale.quantity],
    );
  });

  return insertId;
};

const deleteById = async (saleId) => {
  await connection.execute(
    'DELETE FROM sales WHERE id = ?',
    [saleId],
  );
  await connection.execute(
    'DELETE FROM sales_products WHERE sale_id = ?',
    [saleId],
  );
};

module.exports = {
  findAll,
  findById,
  insert,
  deleteById,
};
