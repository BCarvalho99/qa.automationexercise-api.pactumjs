const {spec} = require('pactum');
const Joi = require('joi');

const apiURL = 'https://automationexercise.com/api';

const schema = Joi.object({
id: Joi.number().required(),
name:Joi.string().required(),
price: Joi.string().required(),
brand: Joi.string().required(),
category:Joi.object({
    usertype: Joi.object({
        usertype: Joi.string().required()
    }).required(),
    category: Joi.string().required()
}).required()
});

const respSchema = Joi.object({
    responseCode: Joi.number().valid(200).required(),
    products: Joi.array().items(schema).required(),

});

describe('Produtos - Testes de Contrato', ()=>{

test('Validar resposta com código de status 200', async()=>{
    const resp = await spec().get(`${apiURL}/productsList`)
    .expectStatus(200) 
    .returns('res.body'); 
    
    
    const { error } = respSchema.validate(resp);
    expect(error).toBeUndefined()
});

})