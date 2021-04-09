import React from 'react';
import {
  Layout, Navbar, Footer, Loading,
} from '../components';

export default function Home() {
  return (
    <div>
      <Layout />
      <Navbar />
      <Loading />
      <Footer />
    </div>
  );
}
