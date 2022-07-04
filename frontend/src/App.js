import React from 'react';

import "./style.css";

import FormUpload from './components/FormUpload';
import ListMovimentacoes from './components/ListMovimentacoes';

function App() {
  return (
    <div>
      <h1>Leitura de CNAB</h1>
      <FormUpload />
      <ListMovimentacoes />
    </div>
  );
}

export default App;
