import { View, Text } from 'react-native'
import React from 'react'
import DrawerNavigator from '../Drawer/DrawerNavigator'
import Header from '../Header'
import TopButtons from '../Top/TopButtons'

const Parent = ({navigation}) => {
  return (
    <>
     <Header navigation={navigation}/>
     <TopButtons navigation={navigation}/>
     <DrawerNavigator navigation={navigation}/>
    </>
     
  )
}

export default Parent