import React from 'react';
import Activities from '../activities';

export default function classes({ grade }) {
  const { name, activities } = grade;
  return (
    <div className="classes">
      <div className="classes-name">
        <h1>{name}</h1>
      </div>
      {
        Object.values(activities).map(
          (activity) => <Activities activity={activity} />,
        )
        }
    </div>
  );
}
