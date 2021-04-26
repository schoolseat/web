import React, { useState, useEffect } from 'react';
import { Layout, Navbar, Footer } from '../components';

export default function Home() {
  const [greeting, setgreeting] = useState();
  const today = new Date();

  useEffect(() => {
    if (today.getHours() < 12) {
      setgreeting('Bom dia');
    } else if (today.getHours() > 12 && today.getHours() < 18) {
      setgreeting('Boa tarde');
    } else {
      setgreeting('Boa noite');
    }
  });

  return (
    <div>
      <Layout />
      <Navbar />
      <div className="page-landing">
        <div className="page-landing-title">
          <h1>
            {greeting}
            {', '}
            seja bem vindo a sua plataforma de estudos
          </h1>
        </div>
        <img src="https://ddez.com.br/wp-content/uploads/2018/02/crianca-computador.jpg" alt="aa" />
        <div className="page-landing-reasons" id="#reasons">
          <ul>
            <p>
              <strong>Ainda não se inscreveu em nossa plataforma?</strong>
            </p>
            <a href="/logon" className="page-landing-logon">
              <p>Se inscreva</p>
            </a>
            <p>
              <strong>Veja alguns motivos para usar a Escola +</strong>
            </p>
            <li>
              Aqui as atividades são tratadas como posts,
              então fica mais facil a vizualização
              e consequentemente a realização
            </li>
            <br />
            <li>
              Os conteudos passados pelos professores ficam visiveis
              e faceis para que o estudante não disperdice o seu tempo
              tendo que procurar em sua turma
            </li>
            <br />
            <li>
              A plataforma é totalmente gratuita e está aberta aos professores e estudantes
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
