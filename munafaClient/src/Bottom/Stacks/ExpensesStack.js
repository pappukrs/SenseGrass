import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ExpensesScreen from '../Expenses/ExpensesScreen';

const Stack = createStackNavigator();

const ExpensesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ExpensesScreen"
      component={ExpensesScreen}
      options={{ headerShown: false ,headerTitle: 'Expenses'}}
    />
    {/* Other screens in the Expenses stack */}
  </Stack.Navigator>
);

export default ExpensesStack;


