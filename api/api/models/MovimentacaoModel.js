
class MovimentacaoModel {

    constructor(cnabLinha = null)
    {
        if( cnabLinha )
        {
            this.tipo = cnabLinha.substr(0,1);
            this.data = cnabLinha.substr(1,8);
            this.valor = cnabLinha.substr(9,10) / 100;
            this.cpf = cnabLinha.substr(19,11);
            this.cartao = cnabLinha.substr(30,12);
            this.hora = cnabLinha.substr(42,6);
            this.lojaDono = cnabLinha.substr(48,14).trim();
            this.lojaNome = cnabLinha.substr(62,19).trim();
        }
    }

    getTipoLabel()
    {
        const labels = {
            '1' : 'Débito',
            '2' : 'Boleto',
            '3' : 'Financiamento',
            '4' : 'Crédito',
            '5' : 'Recebimento Empréstimo',
            '6' : 'Vendas',
            '7' : 'Recebimento TED',
            '8' : 'Recebimento DOC',
            '9' : 'Recebimento DOC'
        }
        return labels[this.tipo];
    }

    getNatureza()
    {
        const labels = {
            '1' : 'Entrada',
            '2' : 'Saída',
            '3' : 'Saída',
            '4' : 'Entrada',
            '5' : 'Entrada',
            '6' : 'Entrada',
            '7' : 'Entrada',
            '8' : 'Entrada',
            '9' : 'Saída'
        }
        return labels[this.tipo];
    }

    async save(dbConnection)
    {
        
        const res = await dbConnection.query(
            `INSERT INTO movimentacoes
                (tipo,mov_data,valor,cpf,cartao,hora,loja_dono,loja_nome)
            VALUES
                (?,?,?,?,?,?,?,?);`,
            [ 
                this.tipo,
                this.data,
                this.valor,
                this.cpf,
                this.cartao,
                this.hora,
                this.lojaDono,
                this.lojaNome
            ]
        );

    }

    async getAll(dbConnection)
    {
        const res = await dbConnection.query(
          `SELECT 
                        id,
                        tipo,
                        mov_data,
                        valor,
                        cpf,
                        cartao,
                        hora,
                        loja_dono,
                        loja_nome
                    FROM movimentacoes
                    ORDER BY loja_nome`
        );
;

        const movimentacoes = res.map( row => {
            let obj = new MovimentacaoModel();
            
            obj.id = row.id;
            obj.tipo = row.tipo;
            obj.tipoLabel = obj.getTipoLabel();
            obj.natureza = obj.getNatureza();
            obj.data = row.mov_data;
            obj.dataFormatada = new Date(
                row.mov_data.substr(0,4),
                row.mov_data.substr(4,2)-1,
                row.mov_data.substr(6,2),
            ).toLocaleDateString();
            obj.valor = row.valor;
            obj.cpf = row.cpf;
            obj.cartao = row.cartao;
            obj.hora = row.hora;
            obj.horaFormatada = `${row.hora.substr(0,2)}:${row.hora.substr(2,2)}`;
            obj.lojaDono = row.loja_dono;
            obj.lojaNome = row.loja_nome;
            return obj;
        })

        return movimentacoes;
        // return [];

    }

    async clean(dbConnection)
    {
        const res = await dbConnection.query(
            `TRUNCATE TABLE movimentacoes`
        );
    }


}

module.exports = MovimentacaoModel;