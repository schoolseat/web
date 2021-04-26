import React from 'react';
import Link from 'next/link';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import {
  Layout,
  Navbar,
  Footer,
} from '../components';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email valido!')
    .required('O email é obrigatorio'),
  password: Yup.string().required('A senha é obrigatoria'),
});

export default function SignIn() {
  const loading = false;
  function handleSubmit({ email, password }) {
    console.log(email, password);
  }
  return (
    <div className="page-login">
      <Layout />
      <Navbar />
      <div>
        <Form schema={schema} onSubmit={handleSubmit}>
          <div className="labels">
            <Input name="email" type="email" placeholder="Seu email" />
            <Input
              name="password"
              type="password"
              placeholder="Sua senha secreta"
            />
            <button type="submit" className="login-button">{loading ? 'Carregando...' : 'Acessar'}</button>
          </div>
          <div className="utils">
            <Link href="/forgotpass">
              <p className="utils-links">Esqueci a senha</p>
            </Link>
            <Link href="/logon">
              <p className="utils-links">Criar conta gratuita</p>
            </Link>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
}
