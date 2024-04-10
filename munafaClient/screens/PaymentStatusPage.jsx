import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CrsossSign from 'react-native-vector-icons/AntDesign'
import CorrectSign from 'react-native-vector-icons/AntDesign'
const SuccessfulPayment = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: 'green' }]}>PAYMENT SUCCESSFUL</Text>
      <CorrectSign name ="checkcircleo" size = {70} />
    </View>
  );
};

const PaymentFailed = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: 'red' }]}>PAYMENT FAILED</Text>
      <CrsossSign name = "closecircle" size={70} />
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
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export { SuccessfulPayment, PaymentFailed };
