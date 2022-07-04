
const api = require("./api");
const FormData = require('form-data');
const fs = require('fs');

describe("CNAB", () => {


  it("Upload CNAB", async () => {
    expect.assertions(1);
    const formData = new FormData();
    formData.append(
        "cnab_file",
        fs.createReadStream('api/tests/CNAB.txt'),
        "CNAB.txt"
    );

    return api.post(`upload`, formData).then( async (response) => {
      await expect(response.status).toBe(200);
    });
  });

  it("Ler movimentações", async () => {
    return api.get(`movimentacoes`).then( async (response) => {
      expect(response.status).toBe(200);
      expect(response.data.length).toBeGreaterThan(0);
    });
  });

  it("Limpar movimentações", async () => {
    return api.get(`limpar`).then((response) => {
      expect(response.status).toBe(200);
    });
  });


  it("Ler movimentações após limpeza", async () => {
    return api.get(`movimentacoes`).then((response) => {
      expect(response.status).toBe(200);
    });
  });
  
});
