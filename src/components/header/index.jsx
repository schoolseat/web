/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import HeaderButton from '../headerButton';
import { useApi } from '../../hooks/auth';

export default function Header() {
  const { user } = useApi();
  const { t } = useTranslation();

  return (
    <div className="header-container">
      <div className="header-subcontainer">
        <h1 className="header-title">SchoolSeat</h1>
        { user && (
          <div className="header-texts-divs">
            <div>
              <Link to="/home" className="header-texts">
                {t('navbar:header.home')}
              </Link>
              <Link to="/calendar" className="header-texts">
                {t('navbar:header.calendar')}
              </Link>
              <Link to="/classes" className="header-texts">
                {t('navbar:header.classes')}
              </Link>
            </div>
            <div className="dropdown">
              <img className="header-pfp" src={user.profilePic} alt="profilePic" />
              <div className="dropdown-content">
                <div className="header-dropdown-texts-div">
                  <Link to="/profile" className="header-dropdown-texts">
                    {t('navbar:header.profile')}
                  </Link>
                </div>
                <div className="header-dropdown-texts-div">
                  <a href="/" className="header-dropdown-texts">{t('navbar:header.sing-out')}</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      { !user && (
        <div className="header-subcontainer">
          <div className="buttons">
            <HeaderButton title={`${t('navbar:logon')}`} href="/singin" />
          </div>
          <div className="buttons">
            <HeaderButton title={`${t('navbar:login')}`} isPurple href="/login" />
          </div>
        </div>
      ) }
    </div>
  );
}
