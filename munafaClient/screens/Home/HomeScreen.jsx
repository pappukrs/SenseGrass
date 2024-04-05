import React from 'react';
import { View, ScrollView } from 'react-native';
import Card from '../Card';
import ComponentWithButtons from '../HomeButton';
import RecentTransaction from '../RecentTransactions';
import PaymentPending from '../PaymentPending';

const HomeScreen = () => {
  
  const recentTransactions = [
    { name: 'Rana', amount: 1000, bank: 'Bank A', time: '12:00 PM' },
    { name: 'John', amount: 2000, bank: 'Bank B', time: '1:00 PM' },
    { name: 'Alice', amount: 1500, bank: 'Bank C', time: '2:00 PM' },
  ];

  
  const recentPendingPayments = [
    { name: 'Emma', pendingAmount: 500, time: '10:00 AM' },
    { name: 'Sophia', pendingAmount: 800, time: '11:00 AM' },
    { name: 'Liam', pendingAmount: 1200, time: '3:00 PM' },
    { name: 'Olivia', pendingAmount: 900, time: '4:00 PM' },
    { name: 'Noah', pendingAmount: 700, time: '5:00 PM' },
  ];

  const handleAddMoney = () => {
    
  };

  return (
    <ScrollView>
      <Card walletBalance="5000" upiID="87564387@munafa" onPressAddMoney={handleAddMoney} />
      <ComponentWithButtons />
     
      <RecentTransaction recentTransactions={recentTransactions} />
     
      <PaymentPending recentPendingPayments={recentPendingPayments} />
    </ScrollView>
  );
};

export default HomeScreen;
