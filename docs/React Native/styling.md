---
title: "Styling"
sidebar_position: 5
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
