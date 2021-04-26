import React, { useState, useEffect } from 'react';
import {
  Layout,
  Navbar,
  Footer,
  Profile,
  Loading,
} from '../components';

import api from '../services/api';

export default function profile() {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await api.get('users?id=0');
        if (!data) return setLoading(true);
        if (data) {
          setUserData(data[0]);
        }
        setLoading(false);
        return 0;
      } catch (e) {
        throw new Error(e);
      }
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
      <Profile user={userData} />
      <Footer />
    </div>
  );
}
