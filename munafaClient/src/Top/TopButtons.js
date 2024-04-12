import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { useDispatch } from 'react-redux';
import { setSelectedButton } from '.././Redux/Actions/ButtonAction';



const TopButtons = () => {

  const navigation = useNavigation(); // Get navigation object using useNavigation hook
  const dispatch = useDispatch();

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

  const handleAccount = () => {

    dispatch(setSelectedButton(0));
    //navigation.navigate('Account'); // Navigate to BankTransferComponent
  };

  const handleDebitCard = () => {
    dispatch(setSelectedButton(1))
    //navigation.navigate('DebitCard'); // Navigate to BankTransferComponent
  };

  const handleLoans = () => {
    dispatch(setSelectedButton(2))
    //navigation.navigate('Loans');
  };

  const handleInsurances = () => {
    dispatch(setSelectedButton(3))
    //navigation.navigate('InSurances');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.BankContainer, isPressedBank && styles.Bankpressed]}
        onPress={handleAccount}
        onPressIn={() => handlePressed('bank', 'in')}
        onPressOut={() => handlePressed('bank', 'out')}
      >
        
        <Text style={styles.text}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.QrScannerContainer, isPressedQrScanner && styles.QrScannerpressed]}
        onPress={handleDebitCard}
        onPressIn={() => handlePressed('qr', 'in')}
        onPressOut={() => handlePressed('qr', 'out')}
      >
        
        <Text style={styles.text}>DebitCard</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.UPIContainer, isPressedUPI && styles.UPIpressed]}
        onPress={handleLoans}
        onPressIn={() => handlePressed('upi', 'in')}
        onPressOut={() => handlePressed('upi', 'out')}
      >
        
        <Text style={styles.text}>Loans</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.ViewContainer, isPressedView && styles.Viewpressed]}
        onPress={handleInsurances}
        onPressIn={() => handlePressed('view', 'in')}
        onPressOut={() => handlePressed('view', 'out')}
      >
  
        <Text style={styles.text}>Insurance</Text>
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

export default TopButtons;
