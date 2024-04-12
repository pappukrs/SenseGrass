
import { SET_SELECTED_BUTTON } from '../ActionTypes/ButtonActionTypes';

export const setSelectedButton = (buttonIndex) => ({
  type: SET_SELECTED_BUTTON,
  payload: buttonIndex,
});
