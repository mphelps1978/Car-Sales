import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import { connect } from 'react-redux'

import { addFeature } from '../actions'



const AdditionalFeatures = props => {

  const handleAddFeature = (id) => {
    return props.addFeature(id);
  }
  // console.log('Props from App: ', props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.upgrades.length ? (
        <ol type="1">
          {props.upgrades.map(item => (
            <AdditionalFeature
            key={item.id}
            upgrades={item}
            handleAddFeature={handleAddFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    upgrades: state.upgrades
  };
};

export default connect(
  mapStateToProps,
  {addFeature}
)(AdditionalFeatures);
