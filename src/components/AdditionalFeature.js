import React from 'react';

import { addFeature } from '../actions/'

const AdditionalFeature = props => {
  console.log('Props from AdditionalFeatures: ', props)

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
      className="button"
      onClick={() => props.addFeature(props.upgrades.id)}>
      Add
      </button>
      {props.upgrades.name} (+{props.upgrades.price})
    </li>
  );
};

export default AdditionalFeature;
