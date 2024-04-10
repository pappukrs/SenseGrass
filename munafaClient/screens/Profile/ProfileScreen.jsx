import React from 'react'
import { View,Text, Button } from 'react-native'
import StripePaymentForm from '../StripePaymentForm'
import { PaymentFailed, SuccessfulPayment } from '../PaymentStatusPage'
import { getData, storeData } from '../Storage'
const ProfileScreen = () => {


  const handleset =()=>{
    storeData("keys","pappu")
  }
  const handleget =()=>{
   console.log("stored", getData("keys"))

   saveData = getData("saveData")

   const _id = getData("_id")
   console.log("saveData",saveData)
   console.log("_id",_id)

  }
  return (
    <>
    {/* <Button title='setData' onPress={handleset}/>
    <PaymentFailed />
    
    <Button title='getData' onPress={handleget}/> */}
    <View>
      <Text>
        View Screen
      </Text>
    </View>

    </>
   
    // <SuccessfulPayment/>
  )
}

export default ProfileScreen