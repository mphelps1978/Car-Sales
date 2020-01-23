export const ADD_UPGRADE = 'ADD_UPGRADE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = item => {
  console.log(item)
  return {
    type: 'ADD_UPGRADE',
    payload: item
  };
}