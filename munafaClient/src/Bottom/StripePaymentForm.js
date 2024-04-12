import React from 'react';
import {View, Button, Platform} from 'react-native';
import {CardField, useConfirmPayment} from '@stripe/stripe-react-native';
import { useNavigation } from '@react-navigation/native';

function StripePaymentForm({ route, navigation }) {

  var amount = route.params ? route.params.amount : undefined;
  var url = route.params ? route.params.url : undefined;

    const navigator = useNavigation()
  const fetchPaymentIntentClientSecret = async () => {
    console.log("fetchPaymentIntentClientSecret ")
    // const apiEndpoint ="https://sense-grass-opal.vercel.app/"
    const apiEndpoint ="https://sense-grass-u3m4.vercel.app"
      //Platform.OS === 'android' ? 'http://192.168.29.190:3000' : 'http://10.0.2.2:4567';

    const response = await fetch(`${apiEndpoint}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

    });
    const {clientSecret} = await response.json();
    return clientSecret;
  };


  const {confirmPayment, loading} = useConfirmPayment();

  const handlePayPress = async () => {
    console.log("handlepayprss")
    // Gather the customer's billing information (for example, email)
    const billingDetails = {
      email: 'impappukrs@gmail.com',
      phone:"124422556",
      name:"pappu kumar",
      description: 'Your payment description goes here',
      "address": {
        "city": "pune",
        "country": "US",
        "line1": "LIN1",
        "line2": "line2",
        "postal_code": "12980",
        "state": "BR"
      },
    };

    // Fetch the intent client secret from the backend
    const clientSecret = await fetchPaymentIntentClientSecret();
    console.log("clientsecret",clientSecret)

    // Confirm the payment with the card details
    const {paymentIntent, error} = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
      paymentMethodData: {
        billingDetails,
      },
    });

    if (error) {
      console.log('Payment confirmation error', error);
      navigator.navigate('paymentFailedScreen')
    } else if (paymentIntent) {
      console.log('Success from promise', paymentIntent);
      navigator.navigate('paymentSuccessScreen',{amount ,url})
    }
  };

  return (
    <View>
      <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={cardDetails => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      />
      <Button onPress={handlePayPress} title="Pay" disabled={loading} />
    </View>
  );
}

export default StripePaymentForm;