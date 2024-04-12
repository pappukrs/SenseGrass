// reducers.js
import { SET_SELECTED_BUTTON } from '../ActionTypes/ButtonActionTypes';

const initialState = {
  selectedButton: 0,
};

const buttonReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_SELECTED_BUTTON:
      return {
        ...state,
        selectedButton: action.payload,
      };
    default:
      return state;
  }
};

export default buttonReducer;
