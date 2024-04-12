import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const AboutUs = ({navigation}) => {

    useEffect(()=>{
   navigation.toggleDrawer()
    })
  return (
    <View>
      <Text>AboutUs</Text>
    </View>
  )
}

export default AboutUs