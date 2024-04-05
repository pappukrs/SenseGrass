import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const Card = ({ walletBalance, upiID, onPressAddMoney }) => {

  const handleCopyUpiID = () => {
    Clipboard.setString(upiID);
    alert('UPI ID copied to clipboard!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.walletBalanceContainer}>
          <Text style={styles.walletBalanceLabel}>Wallet Balance</Text>
          <Text style={styles.walletBalanceAmount}>$ {walletBalance}</Text>
        </View>
        <View style={styles.upiIDContainer}>
          <Text style={styles.upiIDText}>UPI ID: {upiID}</Text>
          <TouchableOpacity style={styles.copyButton} onPress={handleCopyUpiID}>
            <Text style={styles.copyButtonText}>Copy</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={onPressAddMoney}>
          <Text style={styles.addButtonText}>Add Money</Text>
          <View style={styles.arrowContainer}>
            <Text style={styles.arrow}>{">"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: 350,
    height: 230,
    backgroundColor: '#d3f3d3', 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 20,
  },
  walletBalanceContainer: {
    backgroundColor: 'green', 
    borderRadius: 5,
    padding: 10,
  },
  walletBalanceLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },
  walletBalanceAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
  upiIDContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  upiIDText: {
    fontSize: 16,
    color: '#333333',
    marginRight: 10,
  },
  copyButton: {
    backgroundColor: '#007bff', // Blue background
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  copyButtonText: {
    color: '#ffffff',
    fontSize: 14,
  },
  addButton: {
    flexDirection: 'row',
    width:150,
    // justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5cb85c', // Green background
    paddingVertical: 8, // Adjusted padding
    paddingHorizontal: 5, // Adjusted padding
    borderRadius: 5,
    marginTop: 10,
    marginBottom:10
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowContainer: {
    backgroundColor: '#5cb85c', // Green background
    padding: 5, // Adjusted padding
    borderRadius: 5,
  },
  arrow: {
    color: '#ffffff',
    fontSize: 24,
  },
});

export default Card;
