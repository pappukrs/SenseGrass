
import { FETCH_LOANS_SUCCESS, PAY_LOAN_SUCCESS } from '../ActionTypes/LoanActionTypes';

const initialState = [];

const loanReducer = (state = initialState, action) => {

    console.log("loanReducers",action)

  switch (action.type) {

    case "GET_LOAN_DATA":
      return action.payload;

     case "PAY_LOAN":

      let updatedLoans = state.map(loan => {
        if (loan._id === action.payload.loanId) {
          return { ...loan, paid: true, paymentAmount: action.payload.amount, loanAmount: loan.loanAmount - action.payload.amount };
        }
        return loan;
      });

      return updatedLoans;
    default:
      return state;
  }
};

export default loanReducer;
