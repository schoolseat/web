/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';

import './styles.css';

import { useHistory } from 'react-router-dom';
import createClass from '../../assets/createClass.svg';
import { useApi } from '../../hooks/auth';

import { Button } from '../../components';

export default function CreateClass() {
  const [classBio, setClassBio] = useState(false);
  const [className, setClassName] = useState(false);
  const [schoolName, setSchoolName] = useState(false);

  const navigation = useHistory();
  const { postApiData, user } = useApi();

  async function handleClassSelect() {
    if (!className) return alert('Você precisa inserir o nome da turma');
    if (!schoolName) return alert('Você precisa inserir o nome da escola');
    if (!classBio) return alert('Você precisa uma biografia para a turma');

    const parsedPostData = {
      icon: 'book',
      color: 'blue',
      bio: classBio,
      teacher: user._id,
      school: schoolName,
      discipline: className,
    };

    const { data } = await postApiData({ data: parsedPostData, path: 'classes' });
    return navigation.push('/grade', { data });
  }
  return (
    <div className="createclass">
      <aside>
        <img
          src={createClass}
          className="createclass-image"
          alt="Illustration of a boy looking to an monitor"
        />
      </aside>
      <main>
        <div className="createclass-inputs-divs">
          <h1 className="createclass-inputs-title">Criar turma</h1>
          <p className="createclass-titles">Nome da turma</p>
          <input
            className="createclass-inputs"
            maxLength={25}
            onChange={(data) => setClassName(data.target.value)}
          />
        </div>
        <div className="createclass-inputs-divs">
          <p className="createclass-titles">Nome da escola</p>
          <input
            className="createclass-inputs"
            maxLength={25}
            onChange={(data) => setSchoolName(data.target.value)}
          />
        </div>
        <div className="createclass-inputs-divs">
          <p className="createclass-titles">Bio da turma</p>
          <input
            className="createclass-inputs"
            maxLength={180}
            onChange={(data) => setClassBio(data.target.value)}
          />
        </div>
        <div className="createclass-button">
          <Button name="Criar turma" onClick={handleClassSelect} />
        </div>
      </main>
    </div>
  );
}
