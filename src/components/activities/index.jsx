/* eslint-disable no-nested-ternary */
import React from 'react';
import Checkbox from './Checkbox';
import InputBox from './InputBox';

export default function activities({ activity }) {
  const {
    name,
    description,
    activityType,
  } = activity;

  return (
    <div className="activities">
      <div className="activities-info">
        <p className="activities-name">{name}</p>
        <p className="activities-description">{description}</p>
      </div>
      {
      activityType === 'checkbox'
        ? <Checkbox activity={activity} />
        : activityType === 'inputblock'
          ? <InputBox /> : ''
      }
    </div>
  );
}
