const {spec} = require('pactum');


const apiURL = 'https://automationexercise.com/api';

describe('Produtos - Testes de Contrato', ()=>{

test('Validar resposta com código de status 200', async()=>{
    await spec().get(`${apiURL}/productsList`)
    .expectStatus(200);
    
})

})