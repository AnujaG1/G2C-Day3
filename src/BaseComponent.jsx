import React from 'react';
import ChildA from './ChildA';

const BaseComponent = () => {
  return (
    <div className='r3'>
      <p>BaseComponent</p>
      <ChildA />
    </div>
  );
};

export default BaseComponent;