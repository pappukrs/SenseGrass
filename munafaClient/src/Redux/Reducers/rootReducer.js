
import { combineReducers } from 'redux';
import buttonReducer from './ButtonReducers';
import loanReducer from './LoanReducers';

const rootReducer = combineReducers({
  buttons: buttonReducer,
  loans: loanReducer,
});

export default rootReducer;
