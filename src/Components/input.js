import React from 'react';

export const Input = (props) => (
  <input name={props.name} placeholder={props.placeholder} onChange={props.onChange} style={{backgroundColor:'white', width: props.width}}></input>
)