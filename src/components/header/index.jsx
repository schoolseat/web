/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import './styles.css';

import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AlignJustify } from 'react-feather';

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
            <AlignJustify
              size={35}
              color="black"
              className="header-texts-texts-dropdown"
            />
            <div className="header-texts-texts-divs">
              <NavLink
                to="/"
                className="header-texts"
                activeStyle={{
                  fontWeight: 'bold',
                }}
              >
                {t('navbar:header.home')}
              </NavLink>
              <NavLink
                to="/calendar"
                className="header-texts"
                activeStyle={{
                  fontWeight: 'bold',
                }}
              >
                {t('navbar:header.calendar')}
              </NavLink>
              <NavLink
                to="/classes"
                className="header-texts"
                activeStyle={{
                  fontWeight: 'bold',
                }}
              >
                {t('navbar:header.classes')}
              </NavLink>
            </div>
            <div className="dropdown">
              <img className="header-pfp" src={user.profilePic} alt="profilePic" />
              <div className="dropdown-content">
                <div className="header-dropdown-texts-div">
                  <div>
                    <Link to="/profile" className="header-dropdown-texts">
                      {t('navbar:header.profile')}
                    </Link>
                  </div>
                  <div>
                    <Link to="/createclass" className="header-dropdown-texts">
                      {t('navbar:header.createClass')}
                    </Link>
                  </div>
                </div>
                <div className="header-dropdown-texts-div">
                  <button
                    type="button"
                    onClick={() => {
                      window.location.reload();
                      localStorage.setItem('@SchoolSeat/auth_email', 'undefined');
                      localStorage.setItem('@SchoolSeat/auth_password', 'undefined');
                    }}
                    className="header-dropdown-texts"
                  >
                    {t('navbar:header.signOut')}
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
