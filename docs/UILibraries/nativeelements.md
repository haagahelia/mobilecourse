---
title: "React Native Paper"
sidebar_position: 1
---

**React Native Paper** (https://reactnativepaper.com/) is a popular open-source UI library for React Native applications. It provides a set of customizable and pre-designed components that follow Google's Material Design.

### Installation
- Install React Native Paper UI library to your project by typing the following command in your project's folder.
```bash
npm install react-native-paper
```
- You also have to install `react-native-safe-area-context` to handle safe area. Safe areas are areas of the screen that are guaranteed not to be obstructed by system bars or notches on devices.
```bash
npm install react-native-safe-area-context
```
In the following example project, we will learn some of the components that library provides.

### Example Project

We create GitExplore app for searching GitHub repositories based on user-provided keywords. It is similar app that we already delveloped in the Networking section but now we build the user interface using React Native Paper components. The app also allows users to view repository details in a browser. The app looks the following:

![](img/repofinder.png)

#### Create a project

Create a new Expo project and install React Native Paper UI library:

```bash
npx create-expo-app gitexplorer
cd gitexplorer
npm install react-native-safe-area-context
```
Let's first create a new component `GitExplorer`:

```jsx title="GitExplorer.js"
import { StyleSheet, View } from 'react-native';

export default function GitExplorer() {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```
In the `App` component we provide theme by using the `PaperProvider` component. The `PaperProvider` component ensures that all components have access to the necessary theme and configuration options. We also import `GitExplorer` component and render it in the `App` component.

```jsx title="App.js"
import { Provider as PaperProvider } from 'react-native-paper';
import GitExplorer from './GitExplorer'

export default function App() {
  return (
    <PaperProvider>
      <GitExplorer />
    </PaperProvider>
  );
}
```

### App header & GitExplorer component


We need two states to store keyword and repositories.

#### Button & TextInput

#### Fetch

#### Flatlist & Card

#### Web browser