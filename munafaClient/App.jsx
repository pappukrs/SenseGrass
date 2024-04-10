// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Header from './screens/Header';
import TopNavigation from './screens/TopNavigation';
import BottomNavigation from './screens/BottomNavigation';

import { StripeProvider, initStripe } from '@stripe/stripe-react-native';
import StripePaymentForm from './screens/StripePaymentForm';
import 'react-native-gesture-handler';


// initStripe({
//   publishableKey: 'pk_test_51P27tsSDy0B2lTxPwGDHYejkW7BpQEOH7dfEnX15maQsPcFy7HYGUQrkagGKUZDv5llio5uvK08bU7PdhmlybfCi00ocBDk8BM',
// });

const App = () => {
  return (


    <StripeProvider publishableKey="pk_test_51P27tsSDy0B2lTxPwGDHYejkW7BpQEOH7dfEnX15maQsPcFy7HYGUQrkagGKUZDv5llio5uvK08bU7PdhmlybfCi00ocBDk8BM">


    <NavigationContainer>
      <Header />
      {/* <TopNavigation /> */}
      
      <BottomNavigation />
    </NavigationContainer>


{/* <StripePaymentForm/> */}
</StripeProvider> 

  );
};

export default App;
