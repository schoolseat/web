import React, { useEffect, useState } from 'react';

import './styles.css';

import BookImg from '../../assets/book.svg';
import { ClassesCards } from '../../components';

import { useApi } from '../../hooks/auth';

export default function ClassesPage() {
  const [classes, setClasses] = useState(Array);
  const { user, getDataById } = useApi();

  async function handleClasses(id) {
    const fetcheData = await getDataById({ path: 'cars', id });
    setClasses((oldData) => [].concat(fetcheData, oldData));
  }
  function getData() {
    user.classes.forEach((id) => handleClasses(id));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="ClassesPage">
      <div className="ClassesPage-div">
        <p className="ClassesPage-title">
          Parece haver conteudo novo em: Portugues, Matematica, Inglês... e mais
          5 outras materias
        </p>
        <img className="ClassesPage-img" src={BookImg} alt="book" />
      </div>
      {classes.map((classe) => (
        <ClassesCards
          name={classe.discipline}
          icon={classe.icon}
          students={classe.users.length}
        />
      ))}
    </div>
  );
}
