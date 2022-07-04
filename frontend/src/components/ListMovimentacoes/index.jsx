import React from 'react';
import { useEffect, useState } from 'react';
import { apiGet } from '../../api';
import ListItemMovimentacao from '../ListItemMovimentacao';

function ListMovimentacoes()
{
    const [movimentacoesPorLoja, setMovimentacoesPorLoja] = useState([]);
    

    useEffect(() => {
        apiGet('movimentacoes')
        .then( result => {
            if( result.status === 200 )
            {
                separarPorLoja(result.data);
            }
            else 
            {
                alert('Falha ao obter as movimentações');
            }
        })
        .catch( () => {
            alert('Falha ao obter as movimentações');
        });        
    }, []);

    function separarPorLoja(registros)
    {
        
        let porLoja = [];
        let saldoPorLoja = [];
        registros.map( item => {

            if( porLoja[item.lojaNome] === undefined )
            {
                porLoja[item.lojaNome] = [];
                saldoPorLoja[item.lojaNome] = 0;
            }
            return porLoja[item.lojaNome].push(item);
        });

        setMovimentacoesPorLoja(porLoja);
    }

    function limparDados(e)
    {
        e.preventDefault();
        if( window.confirm('deseja limpar os dados importados?') )
        {
            apiGet('limpar')
            .then( data => {
                window.location.reload();
            })
        }
        
    }

    return (
        <div className='conteinerBorder'>
            <h2 className="section-title">
                Dados importados
                <button className="btn-aux" onClick={limparDados}>Limpar dados</button>
            </h2>
            {Object.keys(movimentacoesPorLoja).map(loja => {
                return (
                    <div key={loja}>
                        <ListItemMovimentacao lojaNome={loja} movimentacoes={movimentacoesPorLoja[loja]} />
                    </div>
                )
            })}
            
        </div>
    )
}

export default ListMovimentacoes;