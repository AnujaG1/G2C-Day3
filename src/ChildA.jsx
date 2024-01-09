import React from 'react';
import ChildB from './ChildB';

const ChildA = () => {
  return (
    <div className='r1'>
      <p>ChildA Component</p>
      <ChildB />
    </div>
  );
};

export default ChildA;