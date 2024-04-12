import { View, Text, Settings } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Main from './Main'
import CustomDrawer from './CustomDrawer'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Setting from './Setting'
import LiveSupport from './LiveSupport'
import Header from '../Header'



const Drawer = createDrawerNavigator()
const DrawerNavigator = ({navigation}) => {
  return (
    <>
        
        <Drawer.Navigator  >
        <Drawer.Screen name = "Main" component={Main} options ={{headerShown:false}}/>
        <Drawer.Screen name = "AboutUs" component={AboutUs} options ={{headerShown:false}} navigation={navigation}/>
        <Drawer.Screen name = "ContactUs" component={ContactUs} options ={{headerShown:false}}/>
        <Drawer.Screen name = "Setting" component={Setting} options ={{headerShown:false}}/>
        <Drawer.Screen name = "LiveSupport" component={LiveSupport} options ={{headerShown:false}}/>
        
        
    </Drawer.Navigator>
    </>
  )
}

export default DrawerNavigator