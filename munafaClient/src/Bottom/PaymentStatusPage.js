import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CrsossSign from 'react-native-vector-icons/AntDesign'
import CorrectSign from 'react-native-vector-icons/AntDesign'
import { payLoanMethod } from '../Redux/Actions/LoanAction'
import { useDispatch, useSelector } from 'react-redux';
const SuccessfulPayment = ({route,navigation}) => {
  var {amount,url} = route.params;
  const dispatch =useDispatch()


  var loanPay = async (amount, url) => {
    console.log("inside loan pay____",amount,loanId)
    try {
      const response = await fetch(`${url}`, {
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


  useEffect(()=>{
    loanPay(amount,url)
  },[])

  
  console.log("amount_link____",amount,url)
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: 'green' }]}>PAYMENT SUCCESSFUL</Text>
      <CorrectSign name ="checkcircleo" size = {70} style={styles.checkcircleo} />
    </View>
  );
};

const PaymentFailed = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: 'red' }]}>PAYMENT FAILED</Text>
      <CrsossSign name = "closecircleo" size={70} style={styles.closeCircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  checkcircleo:{
   backgroundColor:"green",
   color:"white"
  },
  closeCircle:{
    backgroundColor:"red",
    color:"white"
  }

});

export { SuccessfulPayment, PaymentFailed };
