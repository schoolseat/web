/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function ClassesCards({
  name, students, icon, ...rest
}) {
  return (
    <div className="ClassesCard" {...rest}>
      <i
        width={35}
        height={35}
        color="white"
        data-feather={icon}
      />
      <h1 className="ClassesCard-title">{name.length > 8 ? name.slice(0, 8).concat('', '...') : name}</h1>
      <div className="ClassesCard-students">
        <i
          width={35}
          height={35}
          color="white"
          data-feather="users"
        />
        <p className="ClassesCard-students-number">{students}</p>
      </div>
    </div>
  );
}
ClassesCards.propTypes = {
  name: PropTypes.string.isRequired,
  students: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
