import {combineReducers} from 'redux';

const imagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_IMAGES':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const formDataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FORM_DATA':
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default combineReducers({
  images: imagesReducer,
  formData: formDataReducer,
});
