/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import Link from 'next/link';

export default function login({ user }) {
  return (
    user
      ? (
        <Dropdown
          data={user}
        />
      ) : (
        <Link href="/login">
          <a href="/" className="login">login</a>
        </Link>
      )
  );
}
function Dropdown(data) {
  const [isListOpen, setListOpen] = useState(false);
  const { proflePic, nickname } = data;
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
          <div>
            <div className="user-data">
              <p className="nickname">{nickname}</p>
            </div>
            <Link
              type="button"
              className="dd-list-item"
              href="/profile/"
            >
              Perfil
            </Link>
          </div>
        </div>
      )
      }
    </div>
  );
}
