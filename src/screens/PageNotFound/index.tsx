import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <h1>
        <strong className='prymary-color'>404</strong>
      </h1>
      <h1>
        <strong className='prymary-color'>Página não encontrada</strong>
      </h1>
      <h1>
        <Link to="/signin">Voltar para o Início</Link>
      </h1>
    </div>
  );
}

export default PageNotFound;
