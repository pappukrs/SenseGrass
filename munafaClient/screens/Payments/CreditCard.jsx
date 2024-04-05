import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text } from 'react-native';
import BackButton from '../BackButton'; 

const CreditCardScreen = ({ navigation }) => {
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSave = () => {
    if (!cardHolderName || !cardNumber || !expiryDate || !cvv) {
      setErrorMessage('Please fill in all fields.');
    } else {
     
      setErrorMessage('');
    }
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  const formatCardNumber = (input) => {
    
    let formattedInput = input.replace(/\D/g, '');
   
    formattedInput = formattedInput.replace(/(.{4})/g, '$1-');
   
    formattedInput = formattedInput.replace(/-+$/, '');
    return formattedInput;
  };

  const handleExpiryDateChange = (text) => {
    
    const formattedInput = text.replace(/\D/g, '').slice(0, 4);
    let expiry = '';
    if (formattedInput.length >= 2) {
      expiry += formattedInput.slice(0, 2) + '/';
    }
    if (formattedInput.length >= 4) {
      expiry += formattedInput.slice(2, 4);
    }
    setExpiryDate(expiry);
  };

  return (
    <View style={styles.container}>
       <Image
        source={require('../../assets/creditcard.jpg')} 
        style={styles.cardImage}
      />
      <View style={styles.card}>
        <Text style={styles.cardDetails}>Card Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Card Holder Name"
          value={cardHolderName}
          onChangeText={setCardHolderName}
        />
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={formatCardNumber(cardNumber)}
          onChangeText={(input) => setCardNumber(formatCardNumber(input))}
          keyboardType="numeric"
          maxLength={19} // 16 digits + 3 hyphens
        />
        <View style={styles.expiryCvvContainer}>
          <TextInput
            style={[styles.input, styles.expiryInput]}
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChangeText={handleExpiryDateChange}
            keyboardType="numeric"
            maxLength={5} // MM/YY format
          />
          <TextInput
            style={[styles.input, styles.cvvInput]}
            placeholder="CVV"
            value={cvv}
            onChangeText={setCvv}
            keyboardType="numeric"
            maxLength={3}
          />
        </View>
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <Button title="Add Card" onPress={handleSave} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    maxWidth: 400, // Limiting card width for better readability
  },
  cardDetails: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  expiryCvvContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expiryInput: {
    flex: 2, // Takes 2/3 of the container width
  },
  cvvInput: {
    flex: 1, // Takes 1/3 of the container width
    marginLeft: 10,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
});

export default CreditCardScreen;
