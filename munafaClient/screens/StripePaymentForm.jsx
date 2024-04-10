import React from 'react';
import {View, Button, Platform} from 'react-native';
import {CardField, useConfirmPayment} from '@stripe/stripe-react-native';

function StripePaymentForm() {


  const fetchPaymentIntentClientSecret = async () => {

    console.log("fetchPaymentIntentClientSecret ")
    const apiEndpoint ="http://192.168.29.190:3000"
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
        "line1": "kkdk",
        "line2": "kdjkdjk",
        "postal_code": "12980",
        "state": "uk"
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

      const response = await fetch('http://192.168.29.190:3000/update-money-transfer-details', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            _id:"828737",
        //   fullName,
        //   bankName,
        //   ifscCode,
        //   accountNumber,
        //   nickname,
        //   amount, // Include amount in the data
          paymentFailure:true,
          paymentSuccess:false,
          userId:"66101450c4ed32ce80f47b0d"
        }),
      });


    } else if (paymentIntent) {
      console.log('Success from promise', paymentIntent);

      const response = await fetch('http://192.168.29.190:3000/update-money-transfer-details', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            _id:"828737",
        //   fullName,
        //   bankName,
        //   ifscCode,
        //   accountNumber,
        //   nickname,
        //   amount, // Include amount in the data
          paymentFailure:false,
          paymentSuccess:true,
          userId:"66101450c4ed32ce80f47b0d"
        }),
      });
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