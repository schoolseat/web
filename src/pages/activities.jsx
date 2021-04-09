import React from 'react';
import {
  Layout, Navbar, Footer, Classes,
} from '../components';
import bruteGrades from '../services/classes.json';

export default function classes() {
  return (
    <div>
      <Layout />
      <Navbar />
      {
        Object.values(bruteGrades).map((grade) => <Classes grade={grade} />)
      }
      <Footer />
    </div>
  );
}
