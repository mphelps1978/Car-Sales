import React from 'react';

const Total = props => {
  console.log('Total Props: ', props)
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

export default Total;