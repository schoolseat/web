import React from 'react';
import {
  Layout, Navbar, Footer,
} from '../components';

export default function Custom500() {
  return (
    <div className="notfound">
      <Layout title="404 - Pagina não encontrada" />
      <Navbar />
      <h1 className="error-title">
        Vishhh, parece que essa pagina não existe
      </h1>
      <p className="paragraph">
        Tenha certeza que esteja logado em sua conta!
      </p>
      <a href="https://google.com" className="link">Isto é um erro?</a>
      <Footer />
    </div>
  );
}
