/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.css';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import googleIcon from '../../assets/google-icon.svg';
import ilustration from '../../assets/ilustration.png';
import { useApi } from '../../hooks/auth';

export default function App() {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [name, setName] = useState(false);
  const [bornDate, setBornDate] = useState(false);
  const [nickname, setNickname] = useState(false);
  const [profilePic, setProfilePic] = useState(false);

  const { getApiData } = useApi();

  async function handleLogin() {
    const login = {
      bio: ' ',
      name,
      email,
      bornDate,
      nickname,
      password,
      profilePic,
    };

    await getApiData({ login });
      <Redirect to="/" />;
  }
  return (
    <div id="page-login">
      <aside>
        <img
          src={ilustration}
          className="image"
          alt="Illustration of a boy writing"
        />
      </aside>
      <main>
        <div className="main-content">
          <h1>Create your account </h1>
          <form>
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
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              onChange={(data) => setName(data.target.value)}
              placeholder="John Doe"
            />
            <label htmlFor="bornDate">Born Date</label>
            <input
              name="borndate"
              type="date"
              placeholder="dd-mm-yyyy"
              value=""
              min={`${new Date().getFullYear() - 80}-01-01`}
              max={`${new Date().getFullYear() - 5}-01-01`}
              onChange={(data) => setBornDate(data.target.value)}
            />
            <label htmlFor="nickname">NickName</label>
            <input
              name="nickname"
              type="text"
              onChange={(data) => setNickname(data.target.value)}
              placeholder="john.doe"
            />
            <label htmlFor="profilePic">Profile Pic</label>
            <input
              name="profilePic"
              type="file"
              onChange={(data) => setProfilePic(data.target.value)}
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
