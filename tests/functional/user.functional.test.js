const { spec } = require("pactum");
const userData = require("../utils/testUser");
const { apiURL } = require("../utils/config");

describe("Usuario - Testes Funcionais", () => {
  test("Criar usuário com dados válidos", async () => {
    const response = await spec()
      .post(`${apiURL}/createAccount`)
      .withForm(userData)
      .expectStatus(200)
      .returns("res.body");
    expect(response.responseCode).toBe(201);
    expect(response.message).toBe("User created!");
  });

  test("Não criar usuário sem nome", async () => {
    const { name, ...userDataSemName } = userData;
    const response = await spec()
      .post(`${apiURL}/createAccount`)
      .withForm(userDataSemName)
      .expectStatus(200)
      .returns("res.body");

    expect(response.responseCode).toBe(400);
  });

  test("Não criar usuário duplicado", async () => {
    await spec()
      .post(`${apiURL}/createAccount`)
      .withForm(userData)
      .expectStatus(200)
      .returns("res.body");

    const response = await spec()
      .post(`${apiURL}/createAccount`)
      .withForm(userData)
      .expectStatus(200)
      .returns("res.body");

    expect(response.responseCode).toBe(400);
    expect(response.message).toBeDefined();
  });

  test("Deve deletar usuário existente", async () => {
    const response = await spec()
      .delete(`${apiURL}/deleteAccount`)
      .withForm({ email: userData.email, password: userData.password })
      .expectStatus(200)
      .returns("res.body");

    expect(response.responseCode).toBe(200);
    expect(response.message).toBe("Account deleted!");
  });

  test("Não deve deletar usuário sem informar a senha", async () => {
    const response = await spec()
      .delete(`${apiURL}/deleteAccount`)
      .withForm({ email: userData.email })
      .expectStatus(200)
      .returns("res.body");

    expect(response.responseCode).toBe(400);
    expect(response.message).toBeDefined();
  });

  test("Não deve deletar usuário sem informar e-mail", async () => {
    const response = await spec()
      .delete(`${apiURL}/deleteAccount`)
      .withForm({ password: userData.password })
      .expectStatus(200)
      .returns("res.body");

    expect(response.responseCode).toBe(400);
    expect(response.message).toBeDefined();
  });
});
