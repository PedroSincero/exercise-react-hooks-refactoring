// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children })  {
  const [car, setCar] = useState({
        red: false,
        blue: false,
        yellow: false,
    });

  const moveCar = (cars, side)  => {
    setCar({ ...car,
      [cars]: side
    });
  };
    const context = {
      ...car, 
      moveCar,
    };

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );

};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
