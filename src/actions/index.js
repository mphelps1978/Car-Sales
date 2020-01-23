

export const addFeature = item => {
  console.log(item)
  return {
    type: 'ADD_UPGRADE',
    payload: item
  };
}

export const removeFeature = feature => ({
  type: 'REMOVE_FEATURE',
  payload: feature
})