---
title: "Flatlist"
sidebar_position: 5
---
**`FlatList`** is a versatile list component with several useful features, including headers, footers, and scrolling capabilities.

In the next example, we create a simple todo app that looks the following:

![](img/flatlist.png)

#### Using the `FlatList` component:
- Import the `FlatList` component from React Native:
```js
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
```
- Declare new states to manage text input value and FlatList items:
```js
// import useState
import { useState } from 'react';

// declare states
const [todo, setTodo] = useState("");
const [todos, setTodos] = useState([]);
```
- Next, we render the `TextInput` and `Button` components:
```jsx
return (  
  <View style={styles.container}>
    <TextInput 
      value={todo}
      onChangeText={text => setTodo(text)}
      placeholder='Enter a new task...'
    />
    <Button title='Add' onPress={handlePress}  />
  </View>
);
```
- The `handlePress` function is called when the Add button is pressed. This function adds the current value of the `todo` state (representing the new task) to the `todos` state array. After adding the task to the array, the `todo` state is reset to an empty string, clearing the `TextInput` for the next task input.
```js
const handlePress = () => {
  setTodos([...todos, { key: todo }]);
  setTodo("");
};
```
- Finally, we render the `FlatList` component to display all todos.
```jsx
<FlatList 
  data={todos} 
  renderItem={({item}) => <Text>{item.key}</Text>} 
/>
```
- The `renderItem` prop defines how data items are rendered within the list. The `data` prop indicates the source of the data, which must be an array. The `keyExtractor` prop extracts a unique key for each item in the list. It that is not defined, index will be used.

:::info[Task]
Read the `FlatList` documentation in https://reactnative.dev/docs/flatlist. 
- Add `ListEmptyComponent` to show text "No data" when the list is empty.
- Use `ItemSeparatorComponent` to render thin line between each list item. You can create a `View` with a height of 1 and a background color to render a line separator between items in a `FlatList`.
:::

There is also `FlashList` component (https://shopify.github.io/flash-list/) that is developed by Shopify.  It is designed to handle large datasets efficiently. It is optimized for memory usage and it is suitable for applications that require smooth scrolling and rendering of large lists.


