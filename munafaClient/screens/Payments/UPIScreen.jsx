
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const UPIScreen = () => {
  const [upiId, setUpiId] = useState('');

  const handleSave = () => {
   
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="UPI ID"
        value={upiId}
        onChangeText={setUpiId}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default UPIScreen;
