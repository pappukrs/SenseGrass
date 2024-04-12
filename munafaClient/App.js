// App.js
import React from 'react';
import { StripeProvider, initStripe } from '@stripe/stripe-react-native';
import StripePaymentForm from './src/Bottom/StripePaymentForm';
import 'react-native-gesture-handler';
import AppNavigator from './src/AppNavigator';
import { Provider } from 'react-redux';

import store from './src/Redux/Store';

const App = () => {
  return (
    <Provider store={store}>
    <StripeProvider publishableKey="pk_test_51P27tsSDy0B2lTxPwGDHYejkW7BpQEOH7dfEnX15maQsPcFy7HYGUQrkagGKUZDv5llio5uvK08bU7PdhmlybfCi00ocBDk8BM">

<AppNavigator/>
</StripeProvider> 
</Provider>
  );
};

export default App;
