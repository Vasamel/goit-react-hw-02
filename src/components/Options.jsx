// import React from 'react'

// eslint-disable-next-line react/prop-types
const Options = ({ goodFunc, neytralFunc, badFunc, resetFunc }) => {
  return (
    <div>
      <button onClick={goodFunc}>Good</button>
      <button onClick={neytralFunc}>Neytral</button>
      <button onClick={badFunc}>Bad</button>
      <button onClick={resetFunc}>Reset</button>
      
    </div>
  );
};

export default Options;
