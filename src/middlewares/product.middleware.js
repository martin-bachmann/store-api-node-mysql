const { productSchema } = require('./schemas');

const productMiddleware = async (req, res, next) => {
  const validation = productSchema.validate(req.body);
  if (validation.error) {
    if (validation.error.details[0].message.match(/length/)) {
      res.status(422).json({ message: validation.error.details[0].message });
    } else {
      res.status(400).json({ message: validation.error.details[0].message });
    }
  } else {
    next();
  }
};

module.exports = productMiddleware;