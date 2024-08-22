"use strict";(self.webpackChunkmobilecourse=self.webpackChunkmobilecourse||[]).push([[7123],{3725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(4848),i=n(8453);const o={title:"Flatlist",sidebar_position:5},a=void 0,l={id:"React Native/flatlist",title:"Flatlist",description:"FlatList is a versatile list component with several useful features, including headers, footers, and scrolling capabilities.",source:"@site/docs/React Native/flatlist.md",sourceDirName:"React Native",slug:"/React Native/flatlist",permalink:"/mobilecourse/docs/React Native/flatlist",draft:!1,unlisted:!1,editUrl:"https://github.com/haagahelia/mobileprogramming.git/docs/React Native/flatlist.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Flatlist",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Core Components",permalink:"/mobilecourse/docs/React Native/corecomponents"},next:{title:"Styling",permalink:"/mobilecourse/docs/React Native/styling"}},r={},c=[{value:"Using the <code>FlatList</code> component:",id:"using-the-flatlist-component",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"FlatList"})})," is a versatile list component with several useful features, including headers, footers, and scrolling capabilities."]}),"\n",(0,s.jsx)(t.p,{children:"In the next example, we create a simple todo app that looks the following:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(7246).A+"",width:"330",height:"189"})}),"\n",(0,s.jsxs)(t.h4,{id:"using-the-flatlist-component",children:["Using the ",(0,s.jsx)(t.code,{children:"FlatList"})," component:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Import the ",(0,s.jsx)(t.code,{children:"FlatList"})," component from React Native:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import {\n  StyleSheet,\n  Text,\n  View,\n  Button,\n  TextInput,\n  FlatList,\n} from "react-native";\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Declare new states to manage text input value and FlatList items:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// import useState\nimport { useState } from 'react';\n\n// declare states\nconst [todo, setTodo] = useState(\"\");\nconst [todos, setTodos] = useState([]);\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Next, we render the ",(0,s.jsx)(t.code,{children:"TextInput"})," and ",(0,s.jsx)(t.code,{children:"Button"})," components:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"return (  \n  <View style={styles.container}>\n    <TextInput \n      value={todo}\n      onChangeText={text => setTodo(text)}\n      placeholder='Enter a new task...'\n    />\n    <Button title='Add' onPress={handlePress}  />\n  </View>\n);\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"handlePress"})," function is called when the Add button is pressed. This function adds the current value of the ",(0,s.jsx)(t.code,{children:"todo"})," state (representing the new task) to the ",(0,s.jsx)(t.code,{children:"todos"})," state array. After adding the task to the array, the ",(0,s.jsx)(t.code,{children:"todo"})," state is reset to an empty string, clearing the ",(0,s.jsx)(t.code,{children:"TextInput"})," for the next task input."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const handlePress = () => {\n  setTodos([...todos, { key: todo }]);\n  setTodo("");\n};\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Finally, we render the ",(0,s.jsx)(t.code,{children:"FlatList"})," component to display all todos."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"<FlatList \n  data={todos} \n  renderItem={({item}) => <Text>{item.key}</Text>} \n/>\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"renderItem"})," prop defines how data items are rendered within the list. The ",(0,s.jsx)(t.code,{children:"data"})," prop indicates the source of the data, which must be an array. The ",(0,s.jsx)(t.code,{children:"keyExtractor"})," prop extracts a unique key for each item in the list. It that is not defined, index will be used."]}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Task",type:"note",children:[(0,s.jsxs)(t.p,{children:["Read the ",(0,s.jsx)(t.code,{children:"FlatList"})," documentation in ",(0,s.jsx)(t.a,{href:"https://reactnative.dev/docs/flatlist",children:"https://reactnative.dev/docs/flatlist"}),"."]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Add ",(0,s.jsx)(t.code,{children:"ListEmptyComponent"}),' to show text "No data" when the list is empty.']}),"\n",(0,s.jsxs)(t.li,{children:["Use ",(0,s.jsx)(t.code,{children:"ItemSeparatorComponent"})," to render thin line between each list item. You can create a ",(0,s.jsx)(t.code,{children:"View"})," with a height of 1 and a background color to render a line separator between items in a ",(0,s.jsx)(t.code,{children:"FlatList"}),"."]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7246:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/flatlist-0dae718eb4398f6b58026daf0041c4a0.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(6540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);