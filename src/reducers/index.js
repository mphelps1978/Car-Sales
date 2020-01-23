import { ADD_UPGRADE, REMOVE_FEATURE } from '../actions';

export const initialState = {
  additionalPrice: 0,
  car: {   price: 26395,
    name: '2019 Ford Mustang',
    image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: [],
  },
  upgrades: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 },
  ],
};


export const reducers = (state = initialState, action) => {
  console.log ('1 ', state)
  console.log ('2 ', state.upgrades)
  console.log ('3 ', state.car)
  console.log ('4 ', state.car.features)

  switch (action.type) {
    case ADD_UPGRADE:
      return {
        ...state,
        additionalPrice:
          state.additionalPrice +
          state.store.find(item => item.id === action.payload).price,
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            state.upgrades.find(item => item.id === action.payload),
          ],
        },
        store: state.upgrades.filter(item => item.id !== action.payload),
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalPrice:
          state.additionalPrice -
          state.car.features.find(item => item.id === action.payload).price,
        car: {
          ...state.car,
          features: state.car.features.filter(
            item => item.id !== action.payload,
          ),
        },
        store: [
          ...state.store,
          state.car.features.find(item => item.id === action.payload),
        ],
      };
    default:
      return state;
  }
};

