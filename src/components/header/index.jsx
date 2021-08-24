/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles.css';

import { useTranslation } from 'react-i18next';

import HeaderButton from '../headerbuttons';
import { useApi } from '../../hooks/auth';

export default function Header() {
  const { user } = useApi();

  return (
    <div className="header-container">
      <div className="header-subcontainer">
        <h1 className="header-title">SchoolSeat</h1>
        { user && <Logged /> }
      </div>
      { !user && <Unknow /> }
    </div>
  );
}
export function Logged() {
  return (
    <div>
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
  );
}
export function Unknow() {
  const { t } = useTranslation();

  return (
    <div className="header-subcontainer">
      <div className="buttons">
        <HeaderButton title={`${t('pageLanding:navbar.logon')}`} href="/singin" />
      </div>
      <div className="buttons">
        <HeaderButton title={`${t('pageLanding:navbar.login')}`} isPurple href="/login" />
      </div>
    </div>
  );
}
