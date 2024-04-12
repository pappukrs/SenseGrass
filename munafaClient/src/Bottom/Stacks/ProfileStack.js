import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../Profile/ProfileScreen';
const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{ headerShown: false ,headerTitle: 'Profile' }}
    />
    {/* Other screens in the Profile stack */}
  </Stack.Navigator>
);

export default ProfileStack;


