import React from 'react';

export const Spinner = () => {
  return (
    <div className='Spinner__container'>
      <svg>
        <circle cx='70' cy='70' r='70'></circle>
      </svg>
      <span>Loading...</span>
    </div>
  );
};
