
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Home/HomeScreen';
import ExpensesScreen from './Expenses/ExpensesScreen';
import ProfileScreen from './Profile/ProfileScreen';
import PaymentsScreen from './Payments/PaymentsScreen';
import BankTransfer from './BankTransfer';
import StripePaymentForm from './StripePaymentForm';
import { PaymentFailed, SuccessfulPayment } from './PaymentStatusPage';
import HomeStacks from './Stacks/HomeStacks';
import PaymentsStack from './Stacks/PaymentsStack';
import ExpensesStack from './Stacks/ExpensesStack';
import ProfileStack from './Stacks/ProfileStack';


const Bottom = createBottomTabNavigator();

const BottomNavigation = ({navigation}) => {
  return (
    <>
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { display: 'flex' },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Payments') {
            iconName = focused ? 'card' : 'card-outline';
          } else if (route.name === 'Expenses') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Bottom.Screen name="Home" component={HomeStacks} options={{headerShown:false}} navigation={navigation}/>
      <Bottom.Screen name="Payments" component={PaymentsStack} options={{headerShown:false}}  navigation={navigation}/>
      <Bottom.Screen name="Expenses" component={ExpensesStack}  options={{headerShown:false}} navigation={navigation}/>
      <Bottom.Screen name="Profile" component={ProfileStack} options={{headerShown:false}}  navigation={navigation}/>
    </Bottom.Navigator>
    </>
  );
};

export default BottomNavigation;
