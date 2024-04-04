// TopNavigation.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './Home/HomeScreen';
import { View, Text } from 'react-native';
import BankTransfer from './BankTransfer';

const Tab = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Account" component={BankTransfer} />
      <Tab.Screen name="Card" component={CardScreen} />
      <Tab.Screen name="Loans" component={LoansScreen} />
      <Tab.Screen name="Insurance" component={InsuranceScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
    </Tab.Navigator>
  );
};

const AccountScreen = () => (
  <View>
    <Text>Account</Text>
  </View>
);

const CardScreen = () => (
  <View>
    <Text>Card</Text>
  </View>
);

const LoansScreen = () => (
  <View>
    <Text>Loans</Text>
  </View>
);

const InsuranceScreen = () => (
  <View>
    <Text>Insurance</Text>
  </View>
);

const ProductsScreen = () => (
  <View>
    <Text>Products</Text>
  </View>
);

export default TopNavigation;
