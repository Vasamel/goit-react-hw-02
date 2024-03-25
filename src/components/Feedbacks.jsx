// import React from "react";

// eslint-disable-next-line react/prop-types
const Feedbacks = ({goodText, neytralText, badText, totalText, positiveText}) => {
 
  return (
    <>
      <div>Good: {goodText}</div>
      <div>Neytral: {neytralText}</div>
      <div>Bad: {badText}</div>
      <div>Total: {totalText}</div>
      <div>Positive: {positiveText}%</div>
    </>
  );
};

export default Feedbacks;
