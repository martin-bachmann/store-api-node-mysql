const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(5).required().messages({
    'string.empty': '"name" is required',
    'string.min': '"name" length must be at least 5 characters long',
  }),
});

const saleSchema = Joi.object({
  productId: Joi.number().required().messages({
    'number.empty': '"productId" is required',
  }),
  quantity: Joi.number().required().min(1).positive()
.messages({
    'number.empty': '"quantity" is required',
    'number.min': '"quantity" must be greater than or equal to 1',
    'number.positive': '"quantity" must be greater than or equal to 1',
  }),
});

module.exports = { productSchema, saleSchema };
