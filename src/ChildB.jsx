import React, { useContext } from 'react';
import FruitContext from './FruitContext';

const ChildB = () => {
  const fruitName = useContext(FruitContext);

  return (
    <div className='r2'>
      <p>ChildB Component: Fruit Name is {fruitName}</p>
    </div>
  );
};

export default ChildB;