CREATE TABLE movimentacoes(
    id INT NOT NULL AUTO_INCREMENT,
    tipo VARCHAR(1),
    mov_data VARCHAR(8),
    valor DECIMAL(15,2),
    cpf VARCHAR(11),
    cartao VARCHAR(12),
    hora VARCHAR(6),
    loja_dono VARCHAR(14),
    loja_nome VARCHAR(19),
    PRIMARY KEY(id)
);