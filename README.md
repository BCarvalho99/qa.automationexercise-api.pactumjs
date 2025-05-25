## Visão Geral

Este repositório contém alguns experimentos automatizados de testes para a API do Automation Exercise. 
O objetivo é executar alguns testes rápidos de validação e armazenar em um relatório, para garantir a integridade dos contratos e o correto funcionamento dos principais fluxo.

Tecnologias Utilizadas

- [PactumJS](https://pactumjs.github.io/) — Framework de testes de API
- [Jest](https://jestjs.io/) — Test Runner
- [Joi](https://joi.dev/) — Validação de schemas
- [Jest HTML Reporter](https://github.com/Hargne/jest-html-reporter) — Relatórios de testes

---

## Instalação

1. Clone o repositório:
   ```bash
   git clone <https://github.com/BCarvalho99/qa.automationexercise-api.pactumjs.git>
   cd <nome_da_pasta>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

---

## Como Executar os Testes

Execute todos os testes com:
```bash
npm test
```

O relatório em HTML será gerado na pasta `relatorios/`.

---

## Relatórios

Após a execução dos testes, acesse o relatório detalhado em:
```
relatorios/test-relatorio.html
```

---
