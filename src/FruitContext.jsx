import React, { createContext } from 'react';

// Create a context
const FruitContext = createContext();

export const FruitProvider = ({ children }) => {
  // Set the initial value (in this case, 'Apple')
  const fruitValue = 'Apple';

  return (
    <FruitContext.Provider value={fruitValue}>
      {children}
    </FruitContext.Provider>
  );
};

export default FruitContext;