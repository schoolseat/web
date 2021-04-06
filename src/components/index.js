import dynamic from 'next/dynamic'

const Footer = dynamic(
  () => import('./footer'),
  { ssr: false }
)

import Layout from './layout';
import Navbar from './navbar';
import Profile from './profile';
import Classes from './classes';

export {
    Layout,
    Navbar,
    Footer,
    Profile,
    Classes
} 