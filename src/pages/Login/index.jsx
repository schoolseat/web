/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../../assets/google-icon.svg';
import ilustration from '../../assets/loginImg.svg';
import { useApi } from '../../hooks/auth';

export default function App() {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const { getApiData, user } = useApi();

  async function handleLogin() {
    if (!email || !password) return alert('Você precisa informar o e-mail e a senha');
    const login = { email, password };
    await getApiData({ login });
    return 0;
  }

  return (
    <div id="page-login">
      <aside>
        <Link to="/" className="button-login">
          <i
            data-feather="arrow-left"
            style={{
              top: 25,
              left: 25,
              position: 'absolute',
            }}
            color="white"
            width={35}
            height={35}
          />
        </Link>
        <img
          src={ilustration}
          className="page-login-image"
          alt="Illustration of a boy writing"
        />
      </aside>
      <main>
        <div className="main-content">
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
              <Link to={user ? '/' : '/login'} className="button-login">
                Login
              </Link>
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
