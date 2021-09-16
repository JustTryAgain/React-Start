import React from 'react';

export const ButtonCraft = ({className, action, children}) => {
  return <button className={className} onClick={action}>
    {children}
  </button>
}