---
title: "Styling"
sidebar_position: 4
---
- Most of the core components has a property called `style` that can be used for inline styling.

```html
<Text style={{ fontSize:18, color: 'red' }}>Red text</Text>
```

The better way is to use `StyleSheet` component

- Import the `StyleSheet` component

```js
import { StyleSheet, Text } from "react-native";
```

- Create a stylesheet

```js
const styles = StyleSheet.create({
  alerttext: {
    fontSize: 18,
    color: "red",
  },
});
```

- Use stylesheet in the `style` attribute

```jsx
<Text style="{styles.alerttext}">Red text</Text>
```

### Flatlist

**`FlatList`** - list component with some nice features (header, footer, scroll etc.)

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

- Declare new states that are used for text input and `FlatList` items

```js
const [text, setText] = useState("");
const [data, setData] = useState([]);
```
- Render the `FlatList` component

```jsx
<FlatList data={data} renderItem={({item}) => <Text>{item.key}</Text>}
keyExtractor={(item, index) => index.toString()} />
```
- `renderItem` prop defines how data items are rendered
- `data` prop defines where data comes from. The value must be an array.
- `keyExtractor` prop extract a unique key for each item.

- Insert typed text from the `TextItem` component to the `data` state when button is pressed (Use spread syntax).

```js
const buttonPressed = () => {
  setData([...data, { key: text }]);
  setText("");
};
```

![w:250](img/flatlist.png)

## React Native APIs

React Native provides some useful APIs that you can use in your apps, for example:

- `Platform` API can be used to get information about current platform

```jsx
import React from "react";
import { Platform, Text, View } from "react-native";

function App() {
  return (
    <View>
      <Text>OS</Text>
      <Text>{Platform.OS}</Text>
      <Text>OS Version</Text>
      <Text>{Platform.Version}</Text>
    </View>
  );
}
```

- `Dimensions` API can be used to get app window dimensions.

```js
import React from "react";
import { Dimensions } from "react-native";

function App() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  // continues...
}
```

- Note! Dimensions can change for example, due to rotation. There is also `useWindowDimensions` hook that automatically updates width and height.


- `Keyboard` API can be used to listen events and make changes to the keyboard.

- You can for example dismiss the keyboard using the `Keyboard.dismiss()` method.

See more APIs from the React Native documentation.
