/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ilustration from '../../assets/loginImg.svg';
import googleIcon from '../../assets/google-icon.svg';

import { useApi } from '../../hooks/auth';
import { BackButton } from '../../components';

export default function App() {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const { getApiData } = useApi();
  const navigate = useHistory();

  async function handleLogin() {
    if (!email || !password) return alert('Você precisa informar o e-mail e a senha');
    const login = { email, password };
    await getApiData(login);
    navigate.push('/');
  }

  return (
    <div id="page-login">
      <aside>
        <BackButton />
        <img
          src={ilustration}
          className="page-login-image"
          alt="Illustration of a boy writing"
        />
      </aside>
      <main>
        <div className="main-content">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              onChange={(data) => setEmail(data.target.value)}
              placeholder="john.doe@email.com"
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              onChange={(data) => setPassword(data.target.value)}
              placeholder="*********"
            />
            <button
              className="button button-login"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
          <div className="separator">or</div>
          <button type="button" className="button button-google">
            <img src={googleIcon} alt="google logo" />
            Login with Google
          </button>
        </div>
      </main>
    </div>
  );
}
