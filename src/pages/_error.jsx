import React from 'react';
import {
  Layout, Navbar, Footer,
} from '../components';

function error() {
  return (
    <div className="error">
      <Layout title="Ocorreu um erro!" />
      <Navbar />
      <h1 className="error-title">
        Ocorreu um imprevisto!
      </h1>
      <p className="paragraph">
        Por favor re-carregue a pagina, caso o mesmo problema aconteça denovo por favor reporte
      </p>
      <a href="https://google.com" className="link">
        por aqui
      </a>
      <Footer />
    </div>
  );
}

export default error;
