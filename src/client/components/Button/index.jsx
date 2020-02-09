import React from 'react';
import './button.scss';

const Button = (props) => {

  const { label, uiType } = props;

  return (
    <button type="button" className={`ui-lib-button ui-lib-button-${uiType}`}>{label}</button>
  )
}

export default Button;
