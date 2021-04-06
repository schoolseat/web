/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Layout, Navbar, Footer, Classes } from '../components';
import {lucas} from '../services/users.json'
import {um} from '../services/classes.json'

export default function classes() {
  return (
    <div>
      <Layout />
      <Navbar />
      <Classes user={lucas} grade={um}/>
      <Footer />
    </div>
  )
}