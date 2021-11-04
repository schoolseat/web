/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import HeaderButton from '../headerButton';
import { useApi } from '../../hooks/auth';

export default function Header() {
  const [showLogin, setShowLogin] = useState(true);
  const { user } = useApi();
  const { t } = useTranslation();

  function handleState() {
    setShowLogin(!user);
  }
  useEffect(() => {
    handleState();
  }, [user]);
  return (
    <div className="header-container">
      <div className="header-subcontainer">
        <h1 className="header-title">SchoolSeat</h1>
        { !showLogin && (
          <div className="header-texts-divs">
            <div>
              <Link to="/" className="header-texts">
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
                  <button
                    type="button"
                    onClick={() => {
                      localStorage.setItem('@SchoolSeat/auth_email', 'undefined');
                      localStorage.setItem('@SchoolSeat/auth_password', 'undefined');
                    }}
                    className="header-dropdown-texts"
                  >
                    {t('navbar:header.sing-out')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      { showLogin && (
        <div className="header-subcontainer">
          <div className="buttons">
            <HeaderButton title={`${t('navbar:logon')}`} href="/signin" />
          </div>
          <div className="buttons">
            <HeaderButton title={`${t('navbar:login')}`} isPurple href="/login" />
          </div>
        </div>
      ) }
    </div>
  );
}
