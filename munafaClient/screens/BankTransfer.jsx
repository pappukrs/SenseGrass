import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BankTransfer = () => {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [bankName, setBankName] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [reEnteredAccountNumber, setReEnteredAccountNumber] = useState('');
  const [nickname, setNickname] = useState('');
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
    } else {
      // Proceed with the transfer or navigation to next screen
      console.log('Continue button clicked');
    }
  };

  return (
    <View>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>{'< Back'}</Text>
      </TouchableOpacity>

      {/* Input Fields */}
      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        placeholder="Select Bank Name"
        value={bankName}
        onChangeText={setBankName}
      />
      <TextInput
        placeholder="IFSC Code"
        value={ifscCode}
        onChangeText={setIfscCode}
      />
      <TextInput
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={setAccountNumber}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Re-enter Account Number"
        value={reEnteredAccountNumber}
        onChangeText={setReEnteredAccountNumber}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Nickname"
        value={nickname}
        onChangeText={setNickname}
      />

      {/* Error Message */}
      {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}

      {/* Continue Button */}
      <TouchableOpacity onPress={handleContinue}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BankTransfer;
