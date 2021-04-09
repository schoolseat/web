import React from 'react';
import Activities from '../activities';

export default function classes(grade) {
  return (
    <div className="classes">
      <div className="classes-name">
        <h1>{Object.values(grade).map((a) => a.name)}</h1>
      </div>
      {
        Object.values(Object.values(grade).map((a) => a.activities)).map(
          (activity) => <Activities activity={activity} />,
        )

        }
    </div>
  );
}
