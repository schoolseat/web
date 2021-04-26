/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Input,
} from '@material-ui/core';

export default function InputBox() {
  return (
    <div className="inputbox">
      <form className="inputbox-form">
        <Input
          id="standard-adornment-password"
          type="text"
        />
      </form>
    </div>
  );
}
