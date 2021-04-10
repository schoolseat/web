import Link from 'next/link';
import React from 'react';
import Login from '../login';
import { lucas } from '../../services/users.json';

const { nickname } = lucas;
const { proflePic } = lucas;

export default function navBar() {
  return (
    <div className="navBar">
      <Link href="/#">
        <a href="/#" className="title">Escola +</a>
      </Link>
      <div className="buttons">
        <ul>
          <Login className="login" profilepic={proflePic} nick={nickname} user={lucas} />
        </ul>
      </div>
    </div>
  );
}
