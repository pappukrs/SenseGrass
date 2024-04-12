import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import DebitCard from './DebitCard';
import CreditCard from './CreditCard';
import UPIScreen from './UPIScreen';

const PaymentsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodSelection = (method) => {
    setSelectedPaymentMethod(method);
    setModalVisible(false);
  };

 
  const renderPaymentMethodScreen = () => {
    switch (selectedPaymentMethod) {
      case 'Debit Card':
        return <DebitCard />;
      case 'Credit Card':
        return <CreditCard />;
      case 'UPI':
        return <UPIScreen />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      
      {selectedPaymentMethod ? (
        renderPaymentMethodScreen()
      ) : (
        <>
          <Button title="Select Payment Method" onPress={() => setModalVisible(true)} />
          
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableOpacity style={styles.modalContainer} onPress={() => setModalVisible(false)}>
              <View style={styles.modalContent}>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>x</Text>
                </TouchableOpacity>
                <Text style={styles.modalTitle}>Select Payment Method</Text>
                <TouchableOpacity style={styles.radioButton} onPress={() => handlePaymentMethodSelection('Debit Card')}>
                  <Text>Debit Card</Text>
                  {selectedPaymentMethod === 'Debit Card' && <Text>✔️</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.radioButton} onPress={() => handlePaymentMethodSelection('Credit Card')}>
                  <Text>Credit Card</Text>
                  {selectedPaymentMethod === 'Credit Card' && <Text>✔️</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.radioButton} onPress={() => handlePaymentMethodSelection('UPI')}>
                  <Text>UPI</Text>
                  {selectedPaymentMethod === 'UPI' && <Text>✔️</Text>}
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Modal>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PaymentsScreen;
