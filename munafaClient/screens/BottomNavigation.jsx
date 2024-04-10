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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />

 <Stack.Screen
      name="BankTransfer"
      component={BankTransfer}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="stripeCardForm"
      component={StripePaymentForm}
      options={{ headerShown: false }}
    />
    {/* Other screens in the Home stack */}
  </Stack.Navigator>
);

const ExpensesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Expenses"
      component={ExpensesScreen}
      options={{ headerShown: false }}
    />
    {/* Other screens in the Expenses stack */}
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    {/* Other screens in the Profile stack */}
  </Stack.Navigator>
);

const PaymentsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Payments"
      component={PaymentsScreen}
      options={{ headerShown: false }}
    />
    {/* Other screens in the Payments stack */}
  </Stack.Navigator>
);

const BottomNavigation = () => {
  return (
    <Tab.Navigator
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
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Payments" component={PaymentsStack} />
      <Tab.Screen name="Expenses" component={ExpensesStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
