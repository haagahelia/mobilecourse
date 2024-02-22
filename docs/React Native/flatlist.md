---
title: "Flatlist"
sidebar_position: 5
---
- **`FlatList`** is a versatile list component with several useful features, including headers, footers, and scrolling capabilities.
- Import the `FlatList` component from React Native
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
- Declare new states to manage text input and FlatList items.
```js
const [text, setText] = useState("");
const [data, setData] = useState([]);
```
- Render the `FlatList` component to display your list.
```jsx
<FlatList data={data} renderItem={({item}) => <Text>{item.key}</Text>} />
```
- The `renderItem` prop defines how data items are rendered within the list.
- The `data` prop indicates the source of the data, which must be an array
- The `keyExtractor` prop extracts a unique key for each item in the list. It that is not defined, index will be used.

- Insert typed text from the `TextItem` component to the `data` state when button is pressed utilizing spread syntax..
```js
const buttonPressed = () => {
  setData([...data, { key: text }]);
  setText("");
};
```

![](img/flatlist.png)
