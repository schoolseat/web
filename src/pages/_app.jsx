/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.css';
import '../styles/colors.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.object]).isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
export default MyApp;
