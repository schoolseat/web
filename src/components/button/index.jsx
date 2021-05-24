/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Button({ name, ...rest }) {
  return (
    <button
      type="button"
      className="buttonComponent"
      {...rest}
    >
      <p className="buttonComponentText">
        {name}
      </p>
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
