import React from 'react';

// Componente Input com suporte para outras props
const Input = ({ type, placeholder, value, onChange, class, id }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    class={className}
    id={id}
    onChange= {onChange}
  />
);

export default Input;