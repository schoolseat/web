import React, { useState, useEffect } from 'react';
import {
  Layout, Navbar, Footer, Classes, Loading,
} from '../components';

import api from '../services/api';

export default function classes() {
  const [activityType, setActivityTipe] = useState();
  const [classData, setClassData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await api.get('classes');
        if (!data) return setLoading(true);
        if (data) {
          setClassData(data);
        }
        setLoading(false);
      } catch (e) {
        throw new Error(e);
      }
      return 0;
    }
    loadData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Layout />
      <Navbar />
      <div className="buttons-div">
        <button type="button" className="activities-buttons" onClick={() => setActivityTipe('done')}>
          Atividades Concluidas
        </button>
        <button type="button" className="activities-buttons" onClick={() => setActivityTipe('pending')}>
          Atividades Pendentes
        </button>
        <button type="button" className="activities-buttons" onClick={() => setActivityTipe('late')}>
          Atividades Atrasadas
        </button>
        {activityType}
      </div>
      {
        loading ? null : Object.values(classData).map((grade) => <Classes grade={grade} />)
      }
      <Footer />
    </div>
  );
}
