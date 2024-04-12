import React from 'react';
import { View, ScrollView } from 'react-native';
import Card from '../Card';
import ComponentWithButtons from '../HomeButton';
import RecentTransaction from '../RecentTransactions';
import PaymentPending from '../PaymentPending';
import { useSelector } from 'react-redux';
import DebitCard from '../../Top/DebitCard/DebitCard';
import Loans from '../../Top/Loans/Loans';
import InSurances from '../../Top/InSurance/InSurances';







const HomeScreen = ({navigation}) => {
  var selectedButton = useSelector(state => state.buttons.selectedButton);
  console.log("selectedButton",selectedButton);

  
  const recentTransactions = [
    { name: 'Rana', amount: 1000, bank: 'Bank A', time: '12:00 PM', },
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



  let componentToShow;

  switch (selectedButton) {
    case 0:
      componentToShow = <Card walletBalance="5000" upiID="87564387@munafa" onPressAddMoney={handleAddMoney} options={{ headerShown: false }}  navigation={navigation}/>;
      break;
    case 1:
      componentToShow = <DebitCard navigation={navigation} />;
      break;
    case 2:
      componentToShow = <Loans  navigation={navigation}/>;
      break;
    case 3:
      componentToShow = <InSurances navigation={navigation} />;
      break;
    default:
      componentToShow = null;
  }
  return (
    <ScrollView>
       {componentToShow}
      {/* <Card walletBalance="5000" upiID="87564387@munafa" onPressAddMoney={handleAddMoney} options={{ headerShown: false }} /> */}
      <ComponentWithButtons  options={{ headerShown: false }}/>
     
      <RecentTransaction recentTransactions={recentTransactions}  options={{ headerShown: false }}/>
     
      <PaymentPending recentPendingPayments={recentPendingPayments} options={{ headerShown: false }} />
    </ScrollView>
  );
};

export default HomeScreen ;
