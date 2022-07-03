import React from "react";
import { useState } from "react";

import "./style.css";

function InputFileUpload({handleChange})
{

    const [arquivoSelecionado, setArquivoSelecionado] = useState("Nenhum arquivo selecionado");

    function handleCnabInputFileChange(e)
    {
        setArquivoSelecionado(e.target.value);
        handleChange(e.target.files[0]);
    }

    function handleFakeButtonClick(e)
    {
        e.preventDefault();
        console.log(e.target.nextSibling.click());
    }

    return (
        <div className="cnab_file_container">
            <button onClick={handleFakeButtonClick}>Selecione Arquivo</button>
            <input type="file"  id="cnab_file" name="cnab_file" onChange={handleCnabInputFileChange} />
            <span>{arquivoSelecionado}</span>
        </div>
    )
}

export default InputFileUpload;