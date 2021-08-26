/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

export default function HeaderButton({ title, isPurple, ...rest }) {
  const purpleStyle = {
    height: 25,
    paddingLeft: 5,
    paddingRight: 5,
    color: 'white',
    borderRadius: 1,
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins',
    textDecoration: 'none',
    backgroundColor: 'rgb(107, 99, 221)',
  };
  const style = {
    height: 25,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 1,
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins',
    textDecoration: 'none',
    backgroundColor: '#F3F1FF',
    color: 'rgb(107, 99, 221)',
  };
  return (
    <div style={isPurple ? purpleStyle : style}>
      <a style={isPurple ? purpleStyle : style} {...rest}>
        {title}
      </a>
    </div>
  );
}

HeaderButton.propTypes = {
  title: PropTypes.string.isRequired,
  isPurple: PropTypes.bool,
};
HeaderButton.defaultProps = {
  isPurple: false,
};
