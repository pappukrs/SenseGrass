import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getLoanDataMethod } from '../../Redux/Actions/LoanAction';

const Loans = ({ navigation }) => {
  const dispatch = useDispatch();
  const loans = useSelector(state => state.loans);

  useEffect(() => {
    getLoanData()
  }, []);

  const getLoanData = async () => {
    try {
      const response = await fetch('http://192.168.29.190:3000/loan/list');
      if (!response.ok) {
        throw new Error('Failed to fetch loan data');
      }
      const data = await response.json();
      console.log("try", data)
      dispatch(getLoanDataMethod(data));
    } catch (error) {
      console.error('Error fetching loan data:', error.message);
      console.log("catch")
    }
  };

  const handlePayNow = (loanId) => {
    navigation.navigate('PayLoan', { loanId });
  };

  return (
    <View>
    {loans.map(loan => (
      loan.loanAmount !== 0 && ( // Check if loanAmount is not equal to zero
        <View key={loan._id} style={styles.card}>
          <View>
            <Text style={styles.text}>Bank: {loan.bank}</Text>
            <Text style={styles.text}>Duration: {loan.duration} months</Text>
            <Text style={styles.text}>Loan Amount: {loan.loanAmount}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => handlePayNow(loan._id)} style={styles.payNowButton}>
              <Text style={styles.buttonText}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    ))}
  </View>
  
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    alignSelf:'flex-end'
  },
  payNowButton: {
    backgroundColor: 'white',
    borderColor: 'darkgray',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default Loans;
