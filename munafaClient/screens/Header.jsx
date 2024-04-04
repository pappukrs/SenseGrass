import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="menu" size={30} color="black" style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={() => {/* Handle notification button press */}}>
          <Ionicons name="notifications" size={30} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* Handle help button press */}}>
          <Ionicons name="help-circle" size={30} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color of the header
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Border color of the header
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default Header;
