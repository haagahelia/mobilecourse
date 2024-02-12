---
title: "Layout"
sidebar_position: 3
---
- Layout can be defined by using **flexbox**
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
![w:300 bg right](img/flex.PNG)

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

![w:300 bg right](img/alignitems.png)


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

![w:300 bg right](img/justifycontent.png)