/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Layout, Navbar, Footer, Classes } from '../components';
import {lucas} from '../services/users.json'
import clas from '../services/classes.json'

export default function classes() {
  return (
    <div>
      <Layout />
      <Navbar />
      {
      Object.values(clas).map(grade => {
                  return <Classes user={lucas} grade={grade}/>
                })
      }
      <Footer />
    </div>
  )
}