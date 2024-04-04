---
title: "Async Storage"
sidebar_position: 1
---
**AsyncStorage** is asynchronous and persistent key-value pair storage system. AsyncStorage is suitable for storing small data sets like user profiles, settings, or app state.
### Installation
You can install Async Storage using the follwing npm command:
```bash
npx expo install @react-native-async-storage/async-storage
```
Import the `AsyncStorage`:
```js
import { AsyncStorage } from '@react-native-async-storage/async-storage';
```
### Save data
The `setItem(key, value)` method can be used to save data. This method takes a key-value pair where the key is a string and the value is either a string or a serializable object converted to a string. 

:::note
Value must be string or it should be 'stringified' before saving using `JSON.stringify()`. For reading you should then use `JSON.parse()`.
:::

```js
handleSave = async () => {
  try {
    await AsyncStorage.setItem('someKey', 'This is the value');
  } catch (error) {
    Alert.alert('Error when saving data');
  }
} 
```
### Read data

The `getItem(key)` method can be used to read data. That retrieves data from AsyncStorage using the defined key.

```js
handleRead = async () => {
  try {
    let value = await AsyncStorage.getItem('someKey');
  } catch (error) {
    Alert.alert('Error when reading data');
  } 
}
```
Expo provides also SecureStore that can be used to encrypt and securely store key–value pairs locally on the device (https://docs.expo.dev/versions/latest/sdk/securestore/).