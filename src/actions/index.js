export const ADD_UPGRADE = 'ADD_UPGRADE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = id => {
  // console.log(id)
  return {
    type: ADD_UPGRADE,
    payload: id
  };
}

export const removeFeature = id => {
  console.log ('Remove ID: ', id)
  return {
  type: REMOVE_FEATURE,
  payload: id
  };
}