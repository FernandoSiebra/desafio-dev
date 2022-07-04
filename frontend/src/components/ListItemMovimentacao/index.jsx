import React, { useEffect } from 'react';
import { useState } from 'react';

import './style.css';

function ListItemMovimentacao ({lojaNome, movimentacoes})
{

    const [saldo, setSaldo] = useState(0);

    useEffect(()=>{
        let saldo = 0;
        movimentacoes.map(item => {
            if( item['natureza'] === "Entrada" )
            {
                saldo += parseFloat(item['valor']);
            }
            else 
            {
                saldo -= parseFloat(item['valor']);
            }
        });
        setSaldo(saldo)
    }, [])

    return (
        <div>
            <h4 className='loja-nome'>{lojaNome}</h4>
            <table className="tabela-movimentacao">
                <thead>
                    <tr>
                        <th>Dono</th>
                        <th>Tipo</th>
                        <th>Natureza</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>CPF</th>
                        <th>Cartão</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {movimentacoes.map( item => {



                        return (
                            <tr key={item['id']}>
                                <td>{item['lojaDono']}</td>
                                <td>{item['tipoLabel']}</td>
                                <td>{item['natureza']}</td>
                                <td>{item['dataFormatada']}</td>
                                <td>{item['horaFormatada']}</td>
                                <td>{item['cpf']}</td>
                                <td>{item['cartao']}</td>
                                <td>R$ {item['valor']}</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="7" align='right'>Saldo em conta</td>
                        <td>R$ {saldo.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default ListItemMovimentacao;