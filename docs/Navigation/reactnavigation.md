---
title: "React Navigation"
sidebar_position: 1
---
- React Navigation provides navigation between different screens
- The following navigators are available:
  - Stack navigator
  - Tab navigator
  - Drawer navigator
- https://reactnavigation.org/ 

![](img/navigators.png)

### Installation
- Installation of the core library and dependencies (React Navigation v6):
```
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
```
### Tab Navigation
- To implement tab navigation, you have to install also the @react-navigation/bottom-tabs
```
npm install @react-navigation/bottom-tabs
```
- Import the `NavigationContainer` and `createBottomTabNavigator` (in App.js)´

```js
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
```
- `createBottomNavigator` returns an object containing 2 properties: `Screen` and `Navigator`. Both are components
- `Navigator` should contain `Screen` elements as its children to define the configuration for routes. 
```js
const Tab = createBottomTabNavigator();
```
- Next, we will create two simple components that we use in our navigation.

1.)  HomeScreen.js
```jsx
import { View, Text } from 'react-native';

export default function HomeScreen() {
 return (
  <View>
    <Text>This is HomeScreen</Text>
  </View>
 );
};
```
2.) SettingScreen.js

```jsx
import { View, Text } from 'react-native';

export default function SettingScreen() {
  return (
    <View>
      <Text>This is SettingScreen</Text>
    </View>
  );
};
```
- `NavigationContainer` is a component which manages the tree and contains the navigation state. It must wrap all navigators structure. 
- Render this component at the root of your app

```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'
import SettingScreen from './SettingScreen'
  
const Tab = createBottomTabNavigator();
  
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

![w:650](img/tab_navigator.png)

- Expo provides icon library that can be used to show icons in your app.
- See more info: https://docs.expo.dev/guides/icons/
- To use icons, you have to import `Ionicons` component
```
import Ionicons from '@expo/vector-icons/Ionicons';
```
- Then, you can render an icon. The `name` props defines what icon to show. You can explore different icons from: https://icons.expo.fyi/
```
  <Ionicons name="home" size={32} color="red" />
```
- In the next slide, we will render icons to our tab navigation bar by using the `screenOptions` props of the `Navigator` component.

```jsx
<NavigationContainer>
  <Tab.Navigator
    screenOptions={({ route }) => ({  // Navigator can be customized using screenOptions
          tabBarIcon: ({ focused, color, size }) => { 
            // Function tabBarIcon is given the focused state,
	    // color and size params
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }

            return <Ionicons name={iconName} size={size} color={color} />;   //it returns an icon component
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>

```
![w:650](img/tab_navigator2.png)

### Stack Navigation

- Install @react-navigation/native-stack
```
npm install @react-navigation/native-stack
```
- Import `NavigationContainer` and `createStackNavigator` to the App.jsx file
```js	
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
```
- Use the `createNativeStackNavigator`

```js
const Stack = createNativeStackNavigator();
```
- Now, the App.jsx source code looks like the following:
```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'
import SettingScreen from './SettingScreen'
  
const Stack = createNativeStackNavigator();
  
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```
- Add a button for navigation to your HomeScreen component 
```js
// Add also imports
// navigation prop is passed in to every screen component (definition) in stack navigator
// navigation prop has navigate function that can be used to navigate between screens
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')} // Navigate to Settings screen
      />
    </View>
  );
}
```
![](img/stack_navigator.png)

#### Passing parameters between pages
- Parameters can be passed by using the navigator's `route` props.

```js
// HomeScreen.js

return (
  <View style={styles.container}>
    <Text>Home screen</Text>
    <Button 
      onPress={() => navigation.navigate('Settings', {user: 'Mike'})}
      title="Settings" />
  </View>
);

```
- Settings screen can now access the passed params

```js
// SettingsScreen.js
function SettingsScreen({ route, navigation }) 
  const { user } = route.params;
  
  return(
    <View style={styles.container}>
      <Text>Welcome to settings {user}</Text>
    </View>
  );
}
```
![w:300 bg right](img/stack_navigator2.png)