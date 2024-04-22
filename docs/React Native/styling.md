---
title: "Styling"
sidebar_position: 5
---
Most of the core React Native components has a property called `style` that can be used for inline styling.

```html
<Text style={{ fontSize:18, color: 'red' }}>Red text</Text>
```
The better way is to use `StyleSheet` component. Styles defined in StyleSheet can be reused across multiple components:

Import the `StyleSheet` component:

```js
import { StyleSheet, Text } from "react-native";
```

StyleSheet `create` method creates a StyleSheet object, which groups styles together and assign each style a unique identifier:

```js
const styles = StyleSheet.create({
  alerttext: {
    fontSize: 18,
    color: "red",
  },
});
```

Use styles in the component's `style` attribute

```jsx
<Text style="{styles.alerttext}">Red text</Text>
```
