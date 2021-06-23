// src/context/Provider.js

import React, {  useState } from 'react';
import CarsContext from './CarsContext';

function Provider({children}) {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const [signal, setColor] = useState({ color: 'red' })

  const moveCar = (car, side) => {
    setCars({
        ...cars,
        [car]: side,
    });
  };

  const changeSignal = (signalColor) => {
    setColor({ color: signalColor })
  };

  const context = { cars, signal, changeSignal, moveCar };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export default Provider;
