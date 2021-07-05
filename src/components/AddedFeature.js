import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      <button
        className='button'
        onClick={() => props.handleRemoveFeature(props.feature.id)}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;