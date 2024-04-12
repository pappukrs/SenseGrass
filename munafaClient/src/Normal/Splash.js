// Splash.js
import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const logo = require('../../assets/munafa-logo.png'); 

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>munafa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green', 
  },
  logo: {
    width: 200, 
    height: 200,
    resizeMode: 'contain', 
  },
  text: {
    fontSize: 24, 
    fontWeight: 'bold', 
    marginTop: 10, 
    color: '#fff', 
  },
});

export default Splash;
