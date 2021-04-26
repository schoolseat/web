import React from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import {
  Layout,
  Navbar,
  Footer,
} from '../components';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio'),
  email: Yup.string()
    .email('Insira um email valido!')
    .required('O email é obrigatorio'),
  password: Yup.string()
    .min(6, 'Mínimo 6 caracteres')
    .required('A senha é obrigatoria'),
});

export default function Login() {
  return (
    <div className="page-login">
      <Layout />
      <Navbar />
      <div>
        <Form schema={schema}>
          <div className="labels">
            <Input name="name" type="text" placeholder="Nome completo" />
            <Input name="email" type="email" placeholder="Seu email" />
            <Input
              name="password"
              type="password"
              placeholder="Sua senha secreta"
            />
            <button type="submit" className="login-button">Fazer o Cadastro</button>
          </div>
        </Form>
        <div className="utils">
          <a className="utils-links" href="/login">Possui uma conta?</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
