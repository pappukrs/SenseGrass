import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { storeData } from './Storage';




const BankTransfer = () => {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [bankName, setBankName] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [reEnteredAccountNumber, setReEnteredAccountNumber] = useState('');
  const [nickname, setNickname] = useState('');
  const [amount, setAmount] = useState(''); // New state variable for amount
  const [errorMessage, setErrorMessage] = useState('');

  const validateFullName = (name) => {
    // Regular expression for full name validation
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(name.trim());
  };

  const handleContinue = () => {
    if (!validateFullName(fullName)) {
      setErrorMessage('Please enter a valid full name.');
    } else if (accountNumber.length !== 11) {
      setErrorMessage('Account number should be 11 digits.');
    } else if (accountNumber !== reEnteredAccountNumber) {
      setErrorMessage('Account numbers do not match.');
    } else if (amount === '') {
      setErrorMessage('Please enter an amount.');
    } else {
      // Proceed with the transfer or navigation to the next screen
      // Make API request to save data
      saveBankTransferData();
    }
  };

  const saveBankTransferData = async () => {
    try {
      // Make API request to save data
      const response = await fetch('http://192.168.29.190:3000/save-money-transfer-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          bankName,
          ifscCode,
          accountNumber,
          nickname,
          amount, // Include amount in the data
          paymentFailure:false,
          paymentSuccess:false,
          userId:"66101450c4ed32ce80f47b0d"
        }),
      });

      const data = await response.json();
      console.log("data:-",data)
      
      storeData("_id",data._id)
      // const saveData ={
      //   name:fullName
      // }
      storeData("name",fullName)

      // Check if data saved successfully
      if (response.ok) {
        // Data saved successfully, navigate to the card details page
        navigation.navigate('stripeCardForm');
      } else {
        // Error saving data, display error message
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.error('Error saving bank transfer data:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };


  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text>{'< Back'}</Text>
      </TouchableOpacity>

      <Text>Send Money To</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Bank name"
        value={bankName}
        onChangeText={setBankName}
      />
      <TextInput
        style={styles.input}
        placeholder="IFSC Code"
        value={ifscCode}
        onChangeText={setIfscCode}
      />
      <TextInput
        style={styles.input}
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={setAccountNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Re-enter Account Number"
        value={reEnteredAccountNumber}
        onChangeText={setReEnteredAccountNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nickname"
        value={nickname}
        onChangeText={setNickname}
      />
      {/* Amount Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      {/* Error Message */}
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      {/* Continue Button */}
      <TouchableOpacity onPress={handleContinue} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  continueButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default BankTransfer;
