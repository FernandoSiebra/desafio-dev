import React from 'react';

import InputFileUpload from '../InputFileUpload';
import BtnSubmit from '../BtnSubmit'

import { apiPost } from '../../api';

import './style.css';
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
                console.log(data);
            });

    }

    return (
        <form id="form-upload" onSubmit={handleSubmit}>
            <h2 className="section-title">Envio de arquivo</h2>
            <InputFileUpload handleChange={updateStateCnabFile} />
            <BtnSubmit />
        </form>
    )
}

export default FormUpload;