const {spec} = require('pactum');
const { respSchema } = require('../schemas/productSchema');
const { apiURL } = require('../utils/config');

describe('Produtos - Testes de Contrato', ()=>{

test('Validar resposta com código de status 200', async()=>{
    
    const resp = await spec().get(`${apiURL}/productsList`)
    .expectStatus(200) 
    .returns('res.body'); 
    
    const { error } = respSchema.validate(resp);
    expect(error).toBeUndefined()
});

})