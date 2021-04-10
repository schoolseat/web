import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';

export default function Layout({ title }) {
  return (
    <Head>
      <title>
        {
       title
         ? `${title} - Escola +`
         : 'Escola +'
       }
      </title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="An Study focused plataform"
      />
    </Head>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
};
Layout.defaultProps = {
  title: undefined,
};
