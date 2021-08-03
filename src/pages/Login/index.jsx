/* eslint-disable jsx-a11y/label-has-associated-control */
import './App.css';
import React from 'react';
import googleIcon from '../../assets/google-icon.svg';
import ilustration from '../../assets/ilustration.png';

const App = () => (
  <div id="page-login">
    <aside>
      <img src={ilustration} alt="Illustration of a boy writing" />
    </aside>
    <main>
      <div className="main-content">
        <form>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="john.doe@email.com"
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="*********"
          />
          <button className="button button-login" type="submit">
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

export default App;
