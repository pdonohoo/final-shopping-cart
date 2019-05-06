import React from 'react';

export const Button = (props) => (
  <button onClick={props.onClick} style={{backgroundColor: props.color,}}>{props.children}</button>
)
