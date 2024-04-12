import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RecentTransaction = ({ recentTransactions }) => {
  // Take only the latest two transactions
  const latestTransactions = recentTransactions.slice(0, 2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Transactions</Text>
      {latestTransactions.map((transaction, index) => (
        <View key={index} style={[styles.transactionContainer, index !== 0 && styles.borderTop]}>
          <View style={styles.avatarContainer}>
            <View style={[styles.avatar, { backgroundColor: getAvatarColor(transaction.name) }]}>
              <Text style={styles.avatarText}>{transaction.name.charAt(0)}</Text>
            </View>
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.senderName}>{transaction.name}</Text>
            <View style={styles.transactionRow}>
              <Text style={styles.transactionTime}>{transaction.time}</Text>

              <View style={{ flex: 0 }}>
    <Text style={styles.bankName}>{transaction.bank.toLowerCase()}</Text>
  </View>

              <Text style={styles.amount}>₹{transaction.amount}</Text>
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
    backgroundColor: '#e6ffe6', // Light green background
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  transactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 10,
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    paddingTop: 15,
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
  transactionDetails: {
    flex: 1,
  },
  senderName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionTime: {
    fontSize: 9,
    color: '#666666',
  },
  bankName: {
    fontSize: 9,
    color: '#666666',
  },
  amount: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default RecentTransaction;
