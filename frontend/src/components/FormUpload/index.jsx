import React from 'react';

import InputFileUpload from '../InputFileUpload';
import BtnSubmit from '../BtnSubmit'

import { apiPost } from '../../api';

import { useState } from 'react';


function FormUpload()
{

    const [cnabFile, setCnabFile] = useState();

    function updateStateCnabFile(file)
    {
        setCnabFile(file);
    }

    function handleSubmit(e)
    {
        e.preventDefault()
        const formData = new FormData();

        formData.append(
            "cnab_file",
            cnabFile,
            cnabFile.name
        );

        apiPost('upload', formData)
            .then( data => {
                window.location.reload();
            });

    }

    return (
        <div>
            <form id="form-upload" className="conteinerBorder" onSubmit={handleSubmit}>
                <h2 className="section-title">Envio de arquivo</h2>
                <InputFileUpload handleChange={updateStateCnabFile} />
                <BtnSubmit />
            </form>
            
        </div>
    )
}

export default FormUpload;