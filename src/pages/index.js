/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Layout, Navbar, Footer } from '../components';

export default function Home() {
  return (
    <div>
      <Layout />
      <Navbar />
      <div className='page-landing'>

      </div>
      <Footer />
    </div>
  )
}