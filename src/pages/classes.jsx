import React, { useState, useEffect } from 'react';
import {
  Layout,
  Navbar,
  Footer,
  Loading,
} from '../components';

import api from '../services/api';

export default function classes() {
  const [userData, setUserData] = useState([]);
  const [classData, setClassData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await api.get('users?id=0');
        if (!data) return setLoading(true);
        if (data) {
          setUserData(data[0]);
        }
        return 0;
      } catch (e) {
        throw new Error(e);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    async function loadClassData() {
      try {
        const { data } = await api.get('classes');
        if (!data) return setLoading(true);
        if (data) {
          setClassData(data[0]);
          setLoading(false);
        }
        return 0;
      } catch (e) {
        throw new Error(e);
      }
    }
    loadClassData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {
       loading ? '' : console.log(Object.values(userData.classes).map((ids) => ids), classData)
      }
      <Layout />
      <Navbar />
      <p>AAAAAAAAAAAAAAAAA</p>
      <Footer />
    </div>
  );
}
