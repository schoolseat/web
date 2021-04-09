/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function InputBox() {
  return (
    <div className="inputbox">
      <form className="inputbox-form">
        <label className="inputbox-label">
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Enviar" className="inputbox-button" />
      </form>
    </div>
  );
}
