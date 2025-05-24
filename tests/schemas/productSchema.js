const Joi = require('joi');


const productSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  price: Joi.string().required(),
  brand: Joi.string().required(),
  category: Joi.object({
    usertype: Joi.object({
      usertype: Joi.string().required()
    }).required(),
    category: Joi.string().required()
  }).required()
});


const respSchema = Joi.object({
  responseCode: Joi.number().valid(200).required(),
  products: Joi.array().items(productSchema).required()
});

module.exports = {
  productSchema,
  respSchema
};
