import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, TouchableWithoutFeedback } from 'react-native';

const PaymentPending = ({ recentPendingPayments }) => {
  const [isClicked, setIsClicked] = useState(false);

  // Take only the latest five pending payments
  const latestPendingPayments = recentPendingPayments.slice(0, 5);

  const handleSendMoney = () => {
    // Logic to handle send money button press
    setIsClicked(true);
    // Simulate sending money action
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  const buttonStyles = {
    backgroundColor: isClicked ? '#5cb85c' : 'transparent', // Change background color when clicked
    borderColor: '#5cb85c', // Green border color
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  };

  const buttonTextStyles = {
    color: isClicked ? 'white' : '#5cb85c', // Change text color when clicked
    fontWeight: 'bold',
    fontSize: 12,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pending Payments</Text>
      {latestPendingPayments.map((payment, index) => (
        <View key={index} style={styles.paymentContainer}>
          <View style={styles.avatarContainer}>
            <View style={[styles.avatar, { backgroundColor: getAvatarColor(payment.name) }]}>
              <Text style={styles.avatarText}>{payment.name.charAt(0)}</Text>
            </View>
          </View>
          <View style={styles.paymentDetails}>
            <Text style={styles.receiverName}>{payment.name}</Text>
            <View style={styles.paymentRow}>
              <Text style={styles.paymentTime}>{payment.time}</Text>
              <Text style={styles.pendingAmount}>{payment.pendingAmount}</Text>
              <TouchableWithoutFeedback onPress={handleSendMoney}>
                <Animated.View style={[styles.sendMoneyButton, buttonStyles]}>
                  <Text style={[styles.buttonText, buttonTextStyles]}>Send Money</Text>
                </Animated.View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

// Helper function to get the avatar color based on the name
const getAvatarColor = (name) => {
  const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff', '#99ffff'];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffe6e6', // Light red background
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  paymentDetails: {
    flex: 1,
  },
  receiverName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentTime: {
    fontSize: 12,
    color: '#666666',
  },
  pendingAmount: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
  },
  sendMoneyButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default PaymentPending;
