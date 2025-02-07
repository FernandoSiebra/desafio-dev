
const pool = require('../system/mariaDB');

const MovimentacaoModel = require('../models/MovimentacaoModel')

class CnabController{

    
    static upload(req, res)
    {
        const cnabContent = req.file.buffer.toString('utf-8').trim();
        const movimentacoes = CnabController.interpretarCNAB(cnabContent);
        CnabController.salvarMovimentacoes(movimentacoes);
        res.status(200).end();
    } 

    static async getAll(req, res)
    {
        const movimentacoes = await CnabController.obterMovimentacoes();
        res.status(200).json(movimentacoes);
    }

    static async clean(req, res)
    {
        // const dbConnection = await ConnectionSingleton.getInstance();
        const conn = await pool.getConnection();
        const objMovimentacao = new MovimentacaoModel()
        await objMovimentacao.clean(conn);
        res.status(200).end();
    }

    static interpretarCNAB(cnabContent)
    {
        const linhas = cnabContent.split('\n');
        let movimentacoes = [];
        linhas.forEach( (linha,i) => {
            movimentacoes.push(new MovimentacaoModel(linha));
        });
        return movimentacoes;
    }

    static async salvarMovimentacoes(movimentacoes)
    {
        // const dbConnection = await ConnectionSingleton.getInstance();
        const conn = await pool.getConnection();
        movimentacoes.forEach( async item => {
            await item.save(conn);
        });
    }

    static async obterMovimentacoes()
    {
        // const dbConnection = await ConnectionSingleton.getInstance();
        const conn = await pool.getConnection();
        const objMovimentacao = new MovimentacaoModel()
        const movimentacoes = await objMovimentacao.getAll(conn);
        return movimentacoes;
    }
    

}

module.exports = CnabController;