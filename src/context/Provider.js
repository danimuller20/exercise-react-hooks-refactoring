// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [cars, setCars] = useState({
    redCar: false,
    blueCar: false,
    yellowCar: false,
  });

  const [signal, setSignal] = useState({color: 'red'});

  const moveCar = (car, side) => {
    setCars({[car]: side})
  };

 const changeSignal = (signalColor) => {
    setSignal({color: signalColor})
  };

  const context = {
    cars,
    moveCar,
    signal,
    changeSignal
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};


export default Provider;
