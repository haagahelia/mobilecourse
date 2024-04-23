"use strict";(self.webpackChunkmobilecourse=self.webpackChunkmobilecourse||[]).push([[999],{9389:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(5893),i=t(1151);const o={title:"React Navigation",sidebar_position:1},r=void 0,s={id:"Navigation/reactnavigation",title:"React Navigation",description:"React Navigation (https://reactnavigation.org/) is a popular routing and navigation library for React Native applications.",source:"@site/docs/Navigation/reactnavigation.md",sourceDirName:"Navigation",slug:"/Navigation/reactnavigation",permalink:"/mobilecourse/docs/Navigation/reactnavigation",draft:!1,unlisted:!1,editUrl:"https://github.com/haagahelia/mobileprogramming.git/docs/Navigation/reactnavigation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"React Navigation",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Navigation",permalink:"/mobilecourse/docs/category/navigation"},next:{title:"Expo Router",permalink:"/mobilecourse/docs/Navigation/exporouter"}},c={},l=[{value:"Installation",id:"installation",level:3},{value:"Tab Navigation",id:"tab-navigation",level:3},{value:"Tab icons",id:"tab-icons",level:4},{value:"Stack Navigation",id:"stack-navigation",level:3},{value:"Passing parameters between pages",id:"passing-parameters-between-pages",level:4}];function A(n){const e={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["React Navigation (",(0,a.jsx)(e.a,{href:"https://reactnavigation.org/",children:"https://reactnavigation.org/"}),") is a popular routing and navigation library for React Native applications."]}),"\n",(0,a.jsx)(e.p,{children:"The following navigation patterns are available:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Stack navigator"}),"\n",(0,a.jsx)(e.li,{children:"Tab navigator"}),"\n",(0,a.jsx)(e.li,{children:"Drawer navigator"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:t(6878).Z+"",width:"735",height:"483"})}),"\n",(0,a.jsx)(e.h3,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(e.p,{children:"Installation of the core library and dependencies (React Navigation v6):"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"npm install @react-navigation/native\nnpx expo install react-native-screens react-native-safe-area-context\n"})}),"\n",(0,a.jsx)(e.h3,{id:"tab-navigation",children:"Tab Navigation"}),"\n",(0,a.jsx)(e.p,{children:"In the next example, we implement a bottom tab navigator that provides navigation between the home and settings screens within the application:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:t(2615).Z+"",width:"576",height:"533"})}),"\n",(0,a.jsx)(e.p,{children:"First, create a new React Native app and install React Navigation. Create two components that are used in the navigator:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",metastring:'title="HomeScreen.js"',children:"import { StyleSheet, Text, View } from 'react-native';\n\nexport default function HomeScreen() {\n  return (\n    <View style={styles.container}>\n      <Text>Welcome to our App!</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",metastring:'title="SettingScreen.js"',children:"import { StyleSheet, Text, View } from 'react-native';\n\nexport default function SettingScreen() {\n  return (\n    <View style={styles.container}>\n      <Text>Manage your privacy settings here.</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    fontSize: 20,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n\n"})}),"\n",(0,a.jsxs)(e.p,{children:["To implement tab navigation, we have to install the ",(0,a.jsx)(e.code,{children:"@react-navigation/bottom-tabs"})," library:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"npm install @react-navigation/bottom-tabs\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Import the ",(0,a.jsx)(e.code,{children:"NavigationContainer"})," and ",(0,a.jsx)(e.code,{children:"createBottomTabNavigator"}),". The ",(0,a.jsx)(e.code,{children:"NavigatorContainer"})," serves as the root component for the navigation and it must be rendered at the top level of your React Native application."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",metastring:'title="App.js"',children:"import { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nexport default function\xa0App()\xa0{\n  return\xa0(\n    <NavigationContainer>\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Next, we call the ",(0,a.jsx)(e.code,{children:"createBottomNavigator"})," function that allows you to create a tab-based navigation where tabs are displayed at the bottom of the screen. The function returns an object containing two components: ",(0,a.jsx)(e.code,{children:"Screen"})," and ",(0,a.jsx)(e.code,{children:"Navigator"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"Navigator"})," component manages the navigation state and renders the screens based on the current navigation state. The ",(0,a.jsx)(e.code,{children:"Screen"})," component represents an individual screen within the navigator."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",metastring:'title="App.js"',children:"import { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\n// highlight-next-line\nconst\xa0Tab\xa0=\xa0createBottomTabNavigator();\n  \nexport default function\xa0App()\xa0{\n  return\xa0(\n    <NavigationContainer>\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Finally, we can set-up the navigator. The ",(0,a.jsx)(e.code,{children:"Screen"})," component's ",(0,a.jsx)(e.code,{children:"name"})," prop defines the name that is used for screen. The name is also used to navigate to the screen. The ",(0,a.jsx)(e.code,{children:"component"})," prop defines the React component to render for the screnn."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",metastring:'title="App.js"',children:"import { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport HomeScreen from './HomeScreen'\nimport SettingScreen from './SettingScreen'\n  \nconst\xa0Tab\xa0=\xa0createBottomTabNavigator();\n  \nexport default function\xa0App()\xa0{\n  return\xa0(\n    <NavigationContainer>\n      // highlight-start\n      <Tab.Navigator>\n        <Tab.Screen\xa0name=\"Home\"\xa0component={HomeScreen}\xa0/>\n        <Tab.Screen\xa0name=\"Settings\"\xa0component={SettingScreen}\xa0/>\n      </Tab.Navigator>\n      // highlight-end\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"Now, we should see the bottom tab naviagtor in our app and we are able to navigate between two components."}),"\n",(0,a.jsx)(e.h4,{id:"tab-icons",children:"Tab icons"}),"\n",(0,a.jsxs)(e.p,{children:["Expo provides icon library that can be used to show icons in your app (",(0,a.jsx)(e.a,{href:"https://docs.expo.dev/guides/icons/",children:"https://docs.expo.dev/guides/icons/"}),")."]}),"\n",(0,a.jsxs)(e.p,{children:["To use icons, you have to import ",(0,a.jsx)(e.code,{children:"Ionicons"})," component:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import Ionicons from '@expo/vector-icons/Ionicons';\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Then, you can render an icon. The ",(0,a.jsx)(e.code,{children:"name"})," props defines what icon to display. You can explore different icons in: ",(0,a.jsx)(e.a,{href:"https://icons.expo.fyi/",children:"https://icons.expo.fyi/"})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:'  <Ionicons name="home" size={32} color="red" />\n'})}),"\n",(0,a.jsxs)(e.p,{children:["Next, we'll add icons to our tab navigation bar by utilizing the ",(0,a.jsx)(e.code,{children:"screenOptions"})," property of the ",(0,a.jsx)(e.code,{children:"Navigator"})," component."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"<NavigationContainer>\n  <Tab.Navigator\n    screenOptions={({ route }) => ({  // Navigator can be customized using screenOptions\n          tabBarIcon: ({ focused, color, size }) => { \n            // Function tabBarIcon is given the focused state,\n\t    // color and size params\n            let iconName;\n\n            if (route.name === 'Home') {\n              iconName = 'home';\n            } else if (route.name === 'Settings') {\n              iconName = 'settings';\n            }\n\n            return <Ionicons name={iconName} size={size} color={color} />;   //it returns an icon component\n          },\n        })}>\n        <Tab.Screen name=\"Home\" component={HomeScreen} />\n        <Tab.Screen name=\"Settings\" component={SettingScreen} />\n      </Tab.Navigator>\n    </NavigationContainer>\n\n"})}),"\n",(0,a.jsx)(e.h3,{id:"stack-navigation",children:"Stack Navigation"}),"\n",(0,a.jsx)(e.p,{children:"In the following example, we'll demonstrate navigating between two screens using stack navigation."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:t(2558).Z+"",width:"682",height:"506"})}),"\n",(0,a.jsxs)(e.p,{children:["To use stack navigation, we have to Install ",(0,a.jsx)(e.code,{children:"@react-navigation/native-stack"})," library:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"npm install @react-navigation/native-stack\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Import ",(0,a.jsx)(e.code,{children:"NavigationContainer"})," and ",(0,a.jsx)(e.code,{children:"createStackNavigator"})," to the App.js file"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",metastring:'title="App.js"',children:"import { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n"})}),"\n",(0,a.jsxs)(e.p,{children:["We call the ",(0,a.jsx)(e.code,{children:"createNativeStackNavigator"})," function and render the navigator and screens. Now, the App.js source code looks like the following:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",metastring:'title="App.js"',children:"import { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport HomeScreen from './HomeScreen'\nimport SettingScreen from './SettingScreen'\n  \nconst Stack = createNativeStackNavigator();\n  \nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={HomeScreen} />\n        <Stack.Screen name=\"Settings\" component={SettingScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["We add a button to our ",(0,a.jsx)(e.code,{children:"HomeScreen"})," component. When the button is pressed, the user is navigated to the setting screen. The component takes a single prop named ",(0,a.jsx)(e.code,{children:"navigation"}),", which is provided by React Navigation and contains ",(0,a.jsx)(e.code,{children:"navigate"})," function for navigating between screens."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"// navigation prop is passed in to every screen component in stack navigator\nexport default function HomeScreen({ navigation }) {\n  return (\n    <View style={styles.container}>\n      <Text>Home screen</Text>\n      <Button\n        title=\"Settings\"\n        onPress={() => navigation.navigate('Settings')} // Navigate to the Settings screen\n      />\n    </View>\n  );\n}\n"})}),"\n",(0,a.jsx)(e.h4,{id:"passing-parameters-between-pages",children:"Passing parameters between pages"}),"\n",(0,a.jsxs)(e.p,{children:["Parameters can be passed by using the navigator's ",(0,a.jsx)(e.code,{children:"route"})," propss."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",metastring:'title="HomeScreen.js"',children:"return (\n  <View style={styles.container}>\n    <Text>Home screen</Text>\n    <Button \n      onPress={() => navigation.navigate('Settings', {user: 'Mike'})}\n      title=\"Settings\" />\n  </View>\n);\n\n"})}),"\n",(0,a.jsx)(e.p,{children:"Setting screen can now access the passed params."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",metastring:'title="SettingScreen.js"',children:"function SettingsScreen({ route }) \n  const { user } = route.params;\n  \n  return(\n    <View style={styles.container}>\n      <Text>Welcome to settings {user}</Text>\n    </View>\n  );\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:t(7147).Z+"",width:"319",height:"568"})})]})}function d(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(A,{...n})}):A(n)}},6878:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/navigators-8cb253a8aa549c6fdf2d7364395800ab.png"},2558:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/stack_navigator-3c0c9148da50dd69a2d7bdd26141cef0.png"},7147:(n,e,t)=>{t.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT8AAAI4CAMAAAFcki4qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURf///wAAAObv797e1t7e5rW9vcXFziEZKUpC5koQ5kpCtUoQtQgICEpKhO8QtSk6MaWlnO8ZY++cY4yUjHtzc1pra721nO8Q5u/eOu9Cte+Ute/eEO9rte/eY4yczoxzzghCGVKUa73mrYxCKYwQKVKUSr3mjIxCCIwQCK1znIycpe9ahO8ZhO+chCEQCEJCSlJKUu+U5u9C5r3F7+9r5ilCEIRzUr2czu+9rb1zzr1CKVJCKVIQKb0QKb1CCFJCCFIQCL0QCK1C5q1ChHNC5nNChAhChAhC5koIhK0Q5q0QhHMQ5nMQhAgQhAgQ5q1Cta1CUnNCtXNCUghCUghCtUoIUq0Qta0QUnMQtXMQUggQUggQtVLv71Lva+/ehFKc772ca1KcKVLvrVLvKVKcrYzvrRmcaxnv7xnvaxmc7xmcKRnvrRnvKRmcrYzv74yc74zva4ycKYzvKYxz71LF71LFa1Jz771za1JzKVLFrVLFKVJzrYzFrRlzaxnF7xnFaxlz7xlzKRnFrRnFKRlzrYzF74zFa4xzKYzFKe/mtVLvzlLvSlKczr2cSlKcCFLvjFLvCFKcjIzvjBmcShnvzhnvShmczhmcCBnvjBnvCBmcjIzvzozvSoycCIzvCFLFzlLFSlJzzr1zSlJzCFLFjFLFCFJzjIzFjBlzShnFzhnFShlzzhlzCBnFjBnFCBlzjIzFzozFSoxzCIzFCIRzhM5znL3v773va72c772cKb3vKYSca++9zoRzpb1z773Fa71zKb3FKe+9773vzr3vSr2cCL3vCIScSr3FSr1zCL3FCMWcnFJrSs5C5s5ChJRC5pRChClChClC5kophM4Q5s4QhJQQ5pQQhCkQhCkQ5s5Ctc5CUpRCtZRCUilCUilCtUopUs4Qtc4QUpQQtZQQUikQUikQtffv7+9rOu8pOu+tOu9rEO8pEO+tEO9rY+9KOu8IOu+MOu9KEO8IEO+MEO9KY+//Ou//vQgQKe/m1vfe7wgAIc69veb//wgAAAAAALg9E8YAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAJaUlEQVR4Xu3dQXLiPBrG8Rcpsjaqsqokc4fOAmvXC9ZzgTkru5kbTJ9htlwhMISa10bdyZeQhgR3QvL9fxBbNopQHttAiCPk48U2OmlDqIsAgLdZGpOjSG+TLa2YuhYAvpLZmR4qmjpXoc5VrvNHFR88qvfg/Lv+E9wwSWPx9w51uiDbzPMAAFymLVFs76SVJkobSl0NAF9JfQl70kPFh9fKMdaCFp+/vLZ3taB2df7oZfgHv7yenrO2lqw1ofOLKD6GvZ/iLe+HF/aba4ljaxt78+hyqdosAAAAXu3pu8DzcaqvG/uxMIm2zgEAAPAm9Z3Oyfz5Bt3Rkybi8VMpHt70/eXcHoYj33vU9D8yJvKvOpfteFKLdOP07fyvd4uDrEO5W+huInvxdeXrPfxilFKJ+tvNIsQsJk1zPs39r9/IOD/nTE39o8AkGrupzQIAAAAAAABX6x/ZSVPLh/9I6Q5vp4rMtrXwKj+c7a1YZ1IvXmyUfhklrrVxX2zs39TmEbHOAQAAAAAAgOtXTw6dzGdssHsY9+FB3B9b63O2tfjLswbjLNXSY3fj6cRP+fHU47961mBIxxpsjp6crA3qDX91JMOjpyHno+PGHfEOG+VCdfcGrkB8/v+lNkSfx9JMnP/gvyoUv1J14Se3WJg+2+FUdLeUhQSJfe50FtwHnPhdno0daUK7iDdhqR3ymxD392EbWxvaOwn5esdlv1+2/AUJkxoPR50cv+rXI+YdL+P9AwAAAAAAAAAAAAAAAMD7Wtf52aYaXuKUdtVHKd5Yn7d+GNqi+HXnxfh18SI+b3y38U2XpG+l91pTv8XZIo2W+mVt5E9qovTSl6GDZlkkb22S0ossxr74ZH0S7UoaKpZWivbJf4+9/Lsk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"},2615:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/tabnaviicons-ae69cb7af30335c5471d082329841c11.png"},1151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>r});var a=t(7294);const i={},o=a.createContext(i);function r(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);