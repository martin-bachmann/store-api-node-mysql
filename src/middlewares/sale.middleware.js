const { saleSchema } = require('./schemas');

const saleMiddleware = async (req, res, next) => {
  const validation = req.body.map((sale) => saleSchema.validate(sale));
  const saleError = validation.find((sale) => sale.error);
  if (saleError) {
    if (saleError.error.details[0].message.match(/greater/)) {
      return res.status(422).json({ message: saleError.error.details[0].message });
    }
    return res.status(400).json({ message: saleError.error.details[0].message });
  }
  next();
};

module.exports = saleMiddleware;