/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles.css';

import { useTranslation } from 'react-i18next';

import HeaderButton from '../headerButton';
import { useApi } from '../../hooks/auth';

export default function Header() {
  const { user } = useApi();

  return (
    <div className="header-container">
      <div className="header-subcontainer">
        <h1 className="header-title">SchoolSeat</h1>
        { !user && <Logged /> }
      </div>
      { user && <Unknow /> }
    </div>
  );
}
export function Logged() {
  const { t } = useTranslation();
  return (
    <div className="header-texts-divs">
      <div>
        <a href="/" className="header-texts">
          {t('navbar:header.home')}
        </a>
        <a href="/calendar" className="header-texts">
          {t('navbar:header.calendar')}
        </a>
        <a href="/classes" className="header-texts">
          {t('navbar:header.classes')}
        </a>
      </div>
      <div className="dropdown">
        <img className="header-pfp" src="https://cdn.discordapp.com/attachments/854896678233702431/880413907095789648/868091706644512820.png" alt="profilePic" />
        <div className="dropdown-content">
          <div className="header-dropdown-texts-div">
            <a href="/profile" className="header-dropdown-texts">{t('navbar:header.profile')}</a>
          </div>
          <div className="header-dropdown-texts-div">
            <a href="/" className="header-dropdown-texts">{t('navbar:header.sing-out')}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export function Unknow() {
  const { t } = useTranslation();

  return (
    <div className="header-subcontainer">
      <div className="buttons">
        <HeaderButton title={`${t('navbar:logon')}`} href="/singin" />
      </div>
      <div className="buttons">
        <HeaderButton title={`${t('navbar:login')}`} isPurple href="/login" />
      </div>
    </div>
  );
}
