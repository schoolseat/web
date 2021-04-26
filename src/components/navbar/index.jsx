import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Login from '../login';

import api from '../../services/api';

export default function navBar() {
  const [nick, setNick] = useState();
  const [pic, setPic] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('users?id=0');

      const { nickname, proflePic } = data[0];

      setNick(nickname);
      setPic(proflePic);
      setUserData(data[0]);
    }
    loadData();
  }, []);

  // console.log(typeof userData, userData);
  return (
    <div className="navBar">
      <Link href="/#">
        <a href="/#" className="title">Escola +</a>
      </Link>
      <div className="buttons">
        <ul>
          <Login className="login" profilepic={pic} nick={nick} user={userData} />
        </ul>
      </div>
    </div>
  );
}
