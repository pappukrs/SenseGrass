import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Home/HomeScreen';
import BankTransfer from '../BankTransfer';
import StripePaymentForm from '../StripePaymentForm';
import { PaymentFailed, SuccessfulPayment } from '../PaymentStatusPage';
import Account from '../../Top/Account/Account';
import Loans from '../../Top/Loans/Loans';
import InSurances from '../../Top/InSurance/InSurances';
import DebitCard from '../../Top/DebitCard/DebitCard';
import PayLoan from '../../Top/Loans/PayLoan';

const Stack = createStackNavigator();

const HomeStacks = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      navigation={navigation}
      options={{ headerShown: false ,headerTitle: 'Home'}}
    />

 <Stack.Screen
      name="BankTransferScreen"
      component={BankTransfer}
      options={{ headerShown: false }}
      navigation={navigation}
    />
    <Stack.Screen
      name="stripeCardFormScreen"
      component={StripePaymentForm}
      options={{ headerShown: false }}
      navigation={navigation}
    />
     <Stack.Screen
      name="paymentSuccessScreen"
      component={SuccessfulPayment}
      options={{ headerShown: false }}
      navigation={navigation}
    />
     <Stack.Screen
      name="paymentFailedScreen"
      component={PaymentFailed}
      options={{ headerShown: false }}
      navigation={navigation}
    />
     <Stack.Screen
      name="Account"
      component={Account}
      options={{ headerShown: false }}
      navigation={navigation}
    />
     <Stack.Screen
      name="DebitCard"
      component={DebitCard}
      options={{ headerShown: false }}
      navigation={navigation}
    />
    <Stack.Screen
      name="Loans"
      component={Loans}
      options={{ headerShown: false }}
      navigation={navigation}
    />
    <Stack.Screen
      name="InSurances"
      component={InSurances}
      options={{ headerShown: false }}
      navigation={navigation}
    />
    <Stack.Screen
    name="PayLoan"
    component={PayLoan}
      options={{ headerShown: false }}
      navigation={navigation}
    />
    {/* Other screens in the Home stack */}
  </Stack.Navigator>
);


export default HomeStacks ;




