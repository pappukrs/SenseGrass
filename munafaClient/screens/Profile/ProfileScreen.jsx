import React from 'react'
import { View,Text } from 'react-native'
import StripePaymentForm from '../StripePaymentForm'
import { PaymentFailed, SuccessfulPayment } from '../PaymentStatusPage'
const ProfileScreen = () => {
  return (
    // <PaymentFailed/>
    <SuccessfulPayment/>
  )
}

export default ProfileScreen