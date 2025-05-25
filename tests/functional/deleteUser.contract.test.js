const { spec } = require("pactum");
const { deleteUserSchema } = require("../schemas/userSchema");
const { apiURL } = require("../utils/config");

describe("Usuarios - Testes de Contrato", () => {
  test("Deve retornar status 200 ao deletar usuário", async () => {
    const userData = {
      email: "usuario.teste@exemplo.com",
      password: "senha123",
    };

    const resp = await spec()
      .delete(`${apiURL}/deleteAccount`)
      .withForm(userData)
      .expectStatus(200)
      .returns("res.body");

    const { error } = deleteUserSchema.validate(resp);
    expect(error).toBeUndefined();
  });
});
