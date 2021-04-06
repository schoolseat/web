/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Layout, Navbar, Footer, Profile } from '../components';

import {lucas} from '../services/users.json'
let user = lucas;

export default function profile() {
  return (
    <div>
      <Layout />
      <Navbar />
      <Profile user={user} />
      <Footer />
    </div>
  )
}