import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import BankIcon from 'react-native-vector-icons/FontAwesome';
import ScanQrIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import UpiIcon from 'react-native-vector-icons/FontAwesome6';
import ViewIcon from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const ComponentWithButtons = () => {

  const navigation = useNavigation(); // Get navigation object using useNavigation hook


  const [isPressedBank, setIsPressedBank] = useState(false);
  const [isPressedQrScanner, setIsPressedQrScanner] = useState(false);
  const [isPressedUPI, setIsPressedUPI] = useState(false);
  const [isPressedView, setIsPressedView] = useState(false);

  const handlePressed = (type, process) => {
    if (type === 'bank') setIsPressedBank(process === 'in');
    else if (type === 'qr') setIsPressedQrScanner(process === 'in');
    else if (type === 'upi') setIsPressedUPI(process === 'in');
    else if (type === 'view') setIsPressedView(process === 'in');
  };

  const handleBankTransfer = () => {
    navigation.navigate('BankTransfer'); // Navigate to BankTransferComponent

  };

  const handleScanQRCode = () => {};

  const handleUpiTransfer = () => {};

  const handleViewExpenses = () => {};

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.BankContainer, isPressedBank && styles.Bankpressed]}
        onPress={handleBankTransfer}
        onPressIn={() => handlePressed('bank', 'in')}
        onPressOut={() => handlePressed('bank', 'out')}
      >
        <BankIcon name="bank" size={20} />
        <Text style={styles.text}>Bank Transfer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.QrScannerContainer, isPressedQrScanner && styles.QrScannerpressed]}
        onPress={handleScanQRCode}
        onPressIn={() => handlePressed('qr', 'in')}
        onPressOut={() => handlePressed('qr', 'out')}
      >
        <ScanQrIcon name="qrcode-scan" size={20} />
        <Text style={styles.text}>Scan-QR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.UPIContainer, isPressedUPI && styles.UPIpressed]}
        onPress={handleUpiTransfer}
        onPressIn={() => handlePressed('upi', 'in')}
        onPressOut={() => handlePressed('upi', 'out')}
      >
        <UpiIcon name="at" size={20} />
        <Text style={styles.text}>UPI</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.ViewContainer, isPressedView && styles.Viewpressed]}
        onPress={handleViewExpenses}
        onPressIn={() => handlePressed('view', 'in')}
        onPressOut={() => handlePressed('view', 'out')}
      >
        <ViewIcon name="preview" size={20} />
        <Text style={styles.text}>View Expense</Text>
      </TouchableOpacity>
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
  BankContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0', // Default background color
    borderRadius: 5,
  },
  text: {
    marginLeft: 10,
    fontSize: 10,
    color: '#333', // Default text color
  },
  Bankpressed: {
    backgroundColor: '#c0c0c0', // Background color when pressed
  },
  QrScannerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0', // Default background color
    borderRadius: 5,
  },
  QrScannerpressed: {
    backgroundColor: '#c0c0c0', // Background color when pressed
  },
  UPIContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0', // Default background color
    borderRadius: 5,
  },
  UPIpressed: {
    backgroundColor: '#c0c0c0', // Background color when pressed
  },
  ViewContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0', // Default background color
    borderRadius: 5,
  },
  Viewpressed: {
    backgroundColor: '#c0c0c0', // Background color when pressed
  },
});

export default ComponentWithButtons;
