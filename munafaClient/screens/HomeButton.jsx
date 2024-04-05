import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Button, Text } from 'react-native-elements';

const IconTextButton = ({ iconName, text, onPress }) => {
  return (
    <Button
      type="clear"
      onPress={onPress}
      containerStyle={styles.buttonContainer}
    >
      <View style={styles.buttonContent}>
        <Icon
          name={iconName}
          type="material"
          color="black"
          size={30}
        />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </Button>
  );
};

const ComponentWithButtons = () => {
  const handleBankTransfer = () => {
    // Logic for Bank Transfer
  };

  const handleScanQRCode = () => {
    // Logic for QR Code scanning
  };

  const handleUPITransfer = () => {
    // Logic for UPI Transfer
  };

  const handleViewExpenses = () => {
    // Logic for viewing expenses
  };

  return (
    <View style={styles.container}>
      <IconTextButton
        iconName="attach-money"
        text="Bank Transfer"
        onPress={handleBankTransfer}
      />
      <Text>Bank</Text>
      <IconTextButton
        iconName="qr-code"
        text="Scan QR Code"
        onPress={handleScanQRCode}
      />
      <Text>QR</Text>
      <IconTextButton
        iconName="payment"
        text="UPI Transfer"
        onPress={handleUPITransfer}
      />
      <Text>UPI</Text>
      <IconTextButton
        iconName="receipt"
        text="View Expenses"
        onPress={handleViewExpenses}
      />
      <Text>Expenses</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background color
    paddingVertical: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonContent: {
    alignItems: 'center',
  },
  buttonText: {
    marginTop: 5,
    fontSize: 16,
  },
});

export default ComponentWithButtons;
