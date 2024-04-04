// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Header from './screens/Header';
import TopNavigation from './screens/TopNavigation';
import BottomNavigation from './screens/BottomNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <Header />
      {/* <TopNavigation /> */}
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default App;
