---
title: "Async Storage"
sidebar_position: 1
---
- **AsyncStorage** is asynchronous and persistent key-value pair storage system
### Installation
```bash
npx expo install @react-native-async-storage/async-storage
```
- Import the `AsyncStorage`:
```js
import { AsyncStorage } from '@react-native-async-storage/async-storage';
```
### Save data
`setItem(key, value)` 

:::note
Value must be string or it should be 'stringified' before saving using `JSON.stringify()`. For reading you should then use `JSON.parse()`.
:::

```js
saveData = async () => {
  try {
    await AsyncStorage.setItem('someKey', 'This is the value');
  } catch (error) {
    Alert.alert('Error saving data');
  }
} 
```
### Read data

`getItem(key)`

```js
readData = async () => {
  try {
    let value = await AsyncStorage.getItem('someKey');
  } catch (error) {
    Alert.alert('Error reading data');
  } 
}
```