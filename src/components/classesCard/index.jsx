import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function ClassesCards({ name, students, icon }) {
  return (
    <div className="ClassesCard">
      <i
        width={35}
        height={35}
        color="white"
        data-feather={icon}
      />
      <h1 className="ClassesCard-title">{name}</h1>
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
