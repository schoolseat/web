import Head from 'next/head';
import React from 'react';

export default function Layout(Page) {
  return (
    <Head>
      {
       Page
         ? (
           <title>
             {`${Page} - Escola +`}
           </title>
         )
         : <title>Escola +</title>
       }
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="An Study focused plataform"
      />
    </Head>
  );
}
