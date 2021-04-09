import dynamic from 'next/dynamic';

import Layout from './layout';
import Navbar from './navbar';
import Profile from './profile';
import Classes from './classes';
import Activities from './activities';
import Loading from './loading';

const Footer = dynamic(
  () => import('./footer'),
  { ssr: false },
);

export {
  Layout,
  Navbar,
  Footer,
  Profile,
  Classes,
  Activities,
  Loading,
};
