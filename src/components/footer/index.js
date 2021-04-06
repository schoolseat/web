/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';

function footer() {
 
  const [theme, setTheme] = useState('light');
  const r = window.document.querySelector(':root');
  const toggleTheme = () => {
    if (theme === 'light') {
      r.style.setProperty('--background-color', 'rgb(0, 0, 0)');
      r.style.setProperty('--color', 'rgb(255,255,255)');
      setTheme('dark');
    } else {
      r.style.setProperty('--background-color', 'rgb(255,255,255)');
      r.style.setProperty('--color', 'rgb(0, 0, 0)');
      setTheme('light');
    } 
  }

  return (
    <div className="footer">
      <footer className="footer-footer">
        <h3>Escola +</h3>
        <p>A sua plataforma de estudos</p>
        <button onClick={() => toggleTheme()} className="footer-button">
          {theme === 'light' ? <strong>tema escuro 🕯 </strong> : <strong>tema claro 💡</strong>}
        </button>
      </footer>
    </div>
  );
}

export default footer;
