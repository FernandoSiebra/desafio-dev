
const api = require("./api");
const FormData = require('form-data');
const fs = require('fs');

describe("CNAB", () => {


  it("Upload CNAB", () => {

    const formData = new FormData();
    formData.append(
        "cnab_file",
        fs.createReadStream('api/tests/CNAB.txt'),
        "CNAB.txt"
    );

    return api.post(`upload`, formData).then((response) => {
      expect(response.status).toBe(200);
    });
  });

  it("Ler movimentações", () => {
    return api.get(`movimentacoes`).then((response) => {
      expect(response.status).toBe(200);
      expect(response.data.length).toBe(21);
    });
  });

  it("Limpar movimentações", () => {
    return api.get(`limpar`).then((response) => {
      expect(response.status).toBe(200);
    });
  });


  it("Ler movimentações após limpeza", () => {
    return api.get(`movimentacoes`).then((response) => {
      expect(response.status).toBe(200);
    });
  });
  
});
