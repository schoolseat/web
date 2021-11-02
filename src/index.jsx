import React from 'react';
import ReactDOM from 'react-dom';

import './config/i18n';
import './styles/index.css';
import App from './pages/router';
import { ApiProvider } from './hooks/auth';

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
