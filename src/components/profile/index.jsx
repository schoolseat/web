import React from 'react';

export default function profile({ user }) {
  const {
    name,
    nickname,
    proflePic,
    age,
    gender,
    isaTeacher,
    theme,
    classes,
  } = user;

  return (
    <div className="profile">
      <ul className="list">
        <div>
          <p className="value">
            {name}
            {' '}
            (
            {nickname}
            )
          </p>
          <img alt="" className="value-img" src={proflePic} />
        </div>
        <div>
          <p className="value">{age}</p>
        </div>
        <div>
          <p className="value">{gender}</p>
        </div>
        <div>
          <p className="value">{theme}</p>
        </div>
        <div>
          <p className="value">
            {' '}
            {isaTeacher ? 'Professor' : ' Aluno '}
          </p>
        </div>
        <div>
          <p className="value">
            {' '}
            {classes}
          </p>
        </div>
      </ul>
    </div>
  );
}
