import AsyncStorage from '@react-native-async-storage/async-storage'

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('Data stored successfully.');
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Retrieved data:', JSON.parse(value));
      return JSON.parse(value);
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Data removed successfully.');
  } catch (error) {
    console.error('Error removing data:', error);
  }
};

export { storeData, getData, removeData };
