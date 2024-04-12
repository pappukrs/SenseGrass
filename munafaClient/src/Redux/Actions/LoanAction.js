
import axios from 'axios';
import { FETCH_LOANS_SUCCESS, FETCH_LOANS_FAILURE, PAY_LOAN_SUCCESS, PAY_LOAN_FAILURE } from '../ActionTypes/LoanActionTypes';

export const fetchLoans = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3000/loan/list');
      dispatch({ type: FETCH_LOANS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_LOANS_FAILURE, payload: error.message });
    }
  };
};


export const getLoanDataMethod = (data)=>({
    type:"GET_LOAN_DATA",
    payload:data

})
export const payLoanMethod = (data) =>( {

type:"PAY_LOAN",
payload:data
});
