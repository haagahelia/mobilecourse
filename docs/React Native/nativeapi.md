---
title: "React Native API"
sidebar_position: 6
---
React Native provides some useful APIs that you can use in your apps, for example:

### Platform
`Platform` API can be used to get information about current platform

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

### Dimensions
`Dimensions` API can be used to get app window dimensions.

```js
import React from "react";
import { Dimensions } from "react-native";

function App() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  // continues...
}
```
:::note
Dimensions can change for example, due to rotation. There is also `useWindowDimensions` hook that automatically updates width and height.
:::

### Keyboard
`Keyboard` API can be used to listen events and make changes to the keyboard. You can for example dismiss the keyboard using the `Keyboard.dismiss()` method.

You can find more APIs from the React Native documentation https://reactnative.dev/docs/accessibilityinfo
