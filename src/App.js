import React from 'react';
import { connect } from 'react-redux'


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';





const App = (props) => {
  // console.log('App Props: ', props)



    return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures
        car={props.car}
        />
      </div>
      <div className="box">
        <AdditionalFeatures
        car={props.car}
        additionalPrice={props.additionalPrice}
        />
        <Total/>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    additionalPrice: state.additionalPrice,
    car: state.car,
  };
};


export default connect(mapStateToProps)(App);










