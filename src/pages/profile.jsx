import React from 'react';
import {
  Layout, Navbar, Footer, Profile,
} from '../components';

import { lucas } from '../services/users.json';

export default function profile() {
  return (
    <div>
      <Layout />
      <Navbar />
      <Profile user={lucas} />
      <Footer />
    </div>
  );
}
