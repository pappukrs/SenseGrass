// PayLoan.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { payLoanMethod } from '../../Redux/Actions';


const PayLoan = ({ route, navigation }) => {
  const [amount, setAmount] = useState('');
  const loans = useSelector(state => state.loans);
  console.log("redux store",loans)
  const { loanId } = route.params;
  console.log("route.params",route.params)
  console.log("load______________________id",loanId)
  console.log("route, navigation",route, navigation)
  const dispatch = useDispatch();

  // Get the bank associated with the loan being paid
  let loan = loans.find(loan => loan._id === loanId);
  const defaultBank = loan ? loan.bank : '';

  const handlePay = (amount, loanId) => {
    // Dispatch action to update loan details in the database
    //dispatch(payLoan(loanId, amount));
    // Navigate to success page upon successful payment
    //loanPay(amount, loanId)
    navigation.navigate('stripeCardFormScreen',{amount,url:`https://sense-grass-u3m4.vercel.app/${loanId}`});
  };

  const loanPay = async (amount, loanId) => {
    console.log("inside loan pay____",amount,loanId)
    try {
      const response = await fetch(`http://192.168.29.190:3000/loan/${loanId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      console.log("response____",response)
      if (!response.ok) {
        throw new Error('Failed to pay loan');
      }
      const data = await response.json();
      console.log("d__a__t_-a",data)
      dispatch(payLoanMethod(data));
    } catch (error) {
      console.error('Error paying loan:', error.message);
    }
  };
  

  return (
    <View>
      <Text>Enter Amount:</Text>
      <TextInput
        onChangeText={setAmount}
        value={amount}
        keyboardType="numeric"
        placeholder="Amount"
      />
      <Text>Select Bank:</Text>
      <TextInput
        value={defaultBank}
        editable={false} // Prevent editing, since it's the default value
      />
      <Button title="Pay" onPress={()=>(handlePay(amount,loanId))} />
    </View>
  );
};

export default PayLoan;
