import React, { useEffect, useState } from 'react';

import './styles.css';

import { useHistory } from 'react-router-dom';
import BookImg from '../../assets/book.svg';
import { ClassesCards } from '../../components';

import { useApi } from '../../hooks/auth';

export default function ClassesPage() {
  const [classes, setClasses] = useState(Array);
  const { user, getDataById } = useApi();

  const navigation = useHistory();
  async function handleClasses(id) {
    const fetcheData = await getDataById({ path: 'classes', id });
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
          Não há nada novo por aqui 🙂
        </p>
        <img className="ClassesPage-img" src={BookImg} alt="book" />
      </div>
      <div className="ClassesPage-cards">
        {classes.map((classe) => (
          <ClassesCards
            icon={classe.icon}
            name={classe.discipline}
            students={classe.users.length}
            onClick={() => navigation.push('/grade', { data: classe })}
          />
        ))}
      </div>
    </div>
  );
}
