import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PaymentsScreen from '../Payments/PaymentsScreen';

const Stack = createStackNavigator()



const PaymentsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="PaymentsScreen"
      component={PaymentsScreen}
      options={{ headerShown: false,headerTitle: 'Payments' }}
    />
    {/* Other screens in the Payments stack */}
  </Stack.Navigator>
);


export default PaymentsStack;