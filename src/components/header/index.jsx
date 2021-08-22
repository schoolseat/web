/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles.css';

import { useTranslation } from 'react-i18next';
import HeaderButton from '../headerbuttons';

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="header-container">
      <div className="header-subcontainer">
        <h1 className="header-title">SchoolSeat</h1>
        <a href="/" className="header-texts">
          Home
        </a>
        <a href="/calendar" className="header-texts">
          Calendar
        </a>
        <a href="/classes" className="header-texts">
          Classes
        </a>
      </div>
      <div className="header-subcontainer">
        <div className="buttons">
          <HeaderButton title={`${t('pageLanding:navbar.logon')}`} />
        </div>
        <div className="buttons">
          <HeaderButton title={`${t('pageLanding:navbar.login')}`} isPurple />
        </div>
      </div>
    </div>
  );
}
