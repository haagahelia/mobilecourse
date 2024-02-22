---
title: "General"
sidebar_position: 1
---
- **React Native** is framework for building mobile apps with Javascript (or TypeScript) and React
- Developed by Meta https://reactnative.dev/
- React Native uses same UI elements as native Android and IOS apps


### Comparison to other frameworks

#### Native Android and IOS
- Performance (pros)
- Native look & feel (pros)
- Security (pros)
- Different codebase & technologies between platforms (cons)

---
#### Hybrid App (Cordova, Phonegap, etc.)

- Performance (cons)
- Weak native look and feel (cons)
- Security (cons)
- One codebase & technology (pros)
---
#### React Native & Google Flutter
- Performance (pros)
- Native look and feel (pros)
- One codebase & technology (pros)
- Lack of some components (cons)
React Native provides possibility to write native code when high performance is needed or some functionalities are missing from React Native
---

- React Native provides mobile components which can be used to create mobile apps
- Some of the most common core components
--  `<View>` - container that supports layout with flexbox
--  `<Button>` - basic button component
--  `<Image>` - component for displaying images
--  `<TextInput>` - component for text input

### Layout
- Layout can be defined by using **flexbox** in React Native apps.
- Flexbox works same way in React Native as it works with CSS in HTML
- Parent container becomes Flex container and all its childs becomes Flex items.

![](img/flexbox.PNG)

### Common flexbox attributes

#### **`flexDirection`**

- Defines the direction how components are organized inside the container (horizontally or vertically). The default is vertically (Note, different than in web!).
- `flexDirection` also defines the **primary axis**
  ![](img/flexdirection.PNG)

#### **`flex`**

- Defines how the space is divided between multiple flex containers

```jsx
<View style="{{flex:" 1}}>
  <View style="{{flex:" 1}}> Some components goes here - 1/3 space </View>
  <View style="{{flex:" 2}}> Some components goes here - 2/3 space </View>
</View>
```
![](img/flex.PNG)

#### **`alignItems`**
-Defines the alignment of childrens in the secondary axis. If `flexDirection` is `row` then the secondary axis is `column` and vice versa.
-Options: `center`, `flex-start`, `flex-end`, `stretch`

```jsx
<View style={{flex: 1, flexDirection: 'row',
  alignItems: 'center'}}>
  <Button title="Button1" onPress={buttonPressed}/>
  <Button title="Button2" onPress={buttonPressed}/>
  <Button title="Button3" onPress={buttonPressed}/>
</View>
```

![](img/alignitems.png)

#### **`justifyContent`**
- Defines the distribution of childrens in the **primary** axis.
  -Options: `center`, `flex-start`, `flex-end`, `space-around`,
  `space-between`

```jsx
<View style={{flex: 1, flexDirection: 'row',
  alignItems: 'center', justifyContent: 'space-around'}}>
  <Button title="Button1" onPress={buttonPressed}/>
  <Button title="Button2" onPress={buttonPressed}/>
  <Button title="Button3" onPress={buttonPressed}/>
</View>
```

![](img/justifycontent.png)