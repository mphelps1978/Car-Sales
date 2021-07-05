import React from 'react';



const AdditionalFeature = props => {
  // console.log('Props from AdditionalFeatures: ', props)
  // console.log('This SHOULD be in the Payload: ', props.upgrades )

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
      className="button"
      onClick={() => props.handleAddFeature(props.upgrades.id)}>
      Add
      </button>
      {props.upgrades.name} (+{props.upgrades.price})
    </li>
  );
};

export default AdditionalFeature;
