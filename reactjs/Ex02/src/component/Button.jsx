import React from 'react';
import './style.css';

function Button({type, children}) {
  return (
    <button className={`btn btn-${type}`} >
      {children}
    </button>
  );
}

export default Button;