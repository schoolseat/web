/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function login({ user, nick, profilepic }) {
  return (
    user
      ? (
        <Dropdown
          nickname={nick}
          proflePic={profilepic}
        />
      ) : (
        <Link href="/login">
          <a href="/" className="login">login</a>
        </Link>
      )
  );
}

function Dropdown({ nickname, proflePic }) {
  const [isListOpen, setListOpen] = useState(false);

  const toggleList = () => {
    isListOpen ? setListOpen(false) : setListOpen(true);
  };
  return (
    <div className="dd-wrapper">
      <button
        type="button"
        className="dd-header"
        onClick={toggleList}
      >
        <img
          className="userClickImage"
          alt=""
          src={proflePic}
        />
      </button>
      {
      isListOpen && (
        <div role="list" className="dd-list">
          <div className="dd-list-itens">
            <div className="user-data">
              <p className="nickname">{nickname}</p>
            </div>
            <Link
              type="button"
              href="/profile/"
            >
              <p className="dd-list-item">Perfil</p>
            </Link>
            <Link
              type="button"
              href="/activities/"
            >
              <p className="dd-list-item">Atividades</p>
            </Link>
            <Link
              type="button"
              href="/logout/"
            >
              <p className="dd-list-item">Sair</p>
            </Link>
          </div>
        </div>
      )
      }
    </div>
  );
}
Dropdown.propTypes = {
  nickname: PropTypes.string.isRequired,
  proflePic: PropTypes.string.isRequired,
};
