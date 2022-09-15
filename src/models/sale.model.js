const connection = require('./connection');

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

module.exports = {
  insert,
};
