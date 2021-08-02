import React from 'react';
import ReactDOM from 'react-dom';
import './styles/colors.css';
import './styles/index.css';
import './config/i18n';
import App from './pages/router';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
