"use strict";(self.webpackChunkmobilecourse=self.webpackChunkmobilecourse||[]).push([[4173],{2848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"UILibraries/nativeelements","title":"React Native Paper","description":"React Native Paper (https://reactnativepaper.com/) is a popular open-source UI library for React Native applications. It provides a set of customizable and pre-designed components that follow Google\'s Material Design.","source":"@site/docs/UILibraries/nativeelements.md","sourceDirName":"UILibraries","slug":"/UILibraries/nativeelements","permalink":"/mobilecourse/docs/UILibraries/nativeelements","draft":false,"unlisted":false,"editUrl":"https://github.com/haagahelia/mobileprogramming.git/docs/UILibraries/nativeelements.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"React Native Paper","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"UI Libraries","permalink":"/mobilecourse/docs/UILibraries/general"},"next":{"title":"Deployment","permalink":"/mobilecourse/docs/category/deployment"}}');var o=n(4848),i=n(8453);const s={title:"React Native Paper",sidebar_position:1},a=void 0,l={},c=[{value:"Installation",id:"installation",level:3},{value:"Example Project",id:"example-project",level:3},{value:"Create a project",id:"create-a-project",level:4},{value:"App header",id:"app-header",level:4},{value:"Button &amp; TextInput",id:"button--textinput",level:4},{value:"Fetch",id:"fetch",level:4},{value:"Flatlist &amp; Card",id:"flatlist--card",level:4},{value:"Web Browser",id:"web-browser",level:4},{value:"Loading indicator",id:"loading-indicator",level:4}];function d(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"React Native Paper"})," (",(0,o.jsx)(t.a,{href:"https://reactnativepaper.com/",children:"https://reactnativepaper.com/"}),") is a popular open-source UI library for React Native applications. It provides a set of customizable and pre-designed components that follow Google's Material Design."]}),"\n",(0,o.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(t.p,{children:"Install React Native Paper UI library to your project by typing the following command in your project's folder."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install react-native-paper\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You also have to install ",(0,o.jsx)(t.code,{children:"react-native-safe-area-context"})," to handle safe area. Safe areas are areas of the screen that are guaranteed not to be obstructed by system bars or notches on devices."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npx expo install react-native-safe-area-context\n"})}),"\n",(0,o.jsx)(t.p,{children:"In the following example project, we will learn some of the components that library provides."}),"\n",(0,o.jsx)(t.h3,{id:"example-project",children:"Example Project"}),"\n",(0,o.jsx)(t.p,{children:"We create GitExplore app for searching GitHub repositories based on user-provided keywords. It is similar app that we already delveloped in the Networking section, but now we build the user interface using React Native Paper components. The app also allows users to view repository details in a browser."}),"\n",(0,o.jsxs)(t.p,{children:["Github REST API url to fetch repositories by keyword is ",(0,o.jsx)(t.a,{href:"https://api.github.com/search/repositories?q=%7Bkeyword%7D",children:"https://api.github.com/search/repositories?q={keyword}"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"The app looks the following:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(1538).A+"",width:"324",height:"666"})}),"\n",(0,o.jsx)(t.h4,{id:"create-a-project",children:"Create a project"}),"\n",(0,o.jsx)(t.p,{children:"Create a new Expo project and install React Native Paper UI library and react-native-safe-area-context:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npx create-expo-app gitexplorer\ncd gitexplorer\nnpm install react-native-paper\nnpx expo install react-native-safe-area-context\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Let's first create a new component ",(0,o.jsx)(t.code,{children:"GitExplorer"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="GitExplorer.js"',children:"import { StyleSheet, View } from 'react-native';\n\nexport default function GitExplorer() {\n  return (\n    <View style={styles.container}>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    marginTop: 10,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.code,{children:"App"})," component, we provide theme by using the ",(0,o.jsx)(t.code,{children:"PaperProvider"})," component. The ",(0,o.jsx)(t.code,{children:"PaperProvider"})," component ensures that all components have access to the necessary theme and configuration options. We also import ",(0,o.jsx)(t.code,{children:"GitExplorer"})," component and render it in the ",(0,o.jsx)(t.code,{children:"App"})," component."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="App.js"',children:"import { PaperProvider } from 'react-native-paper';\nimport { StatusBar } from 'expo-status-bar';\nimport GitExplorer from './GitExplorer'\n\nexport default function App() {\n  return (\n    <PaperProvider>\n      <GitExplorer />\n      <StatusBar style=\"auto\" />\n    </PaperProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h4,{id:"app-header",children:"App header"}),"\n",(0,o.jsxs)(t.p,{children:["Next, we will implement application app bar. Top app bars display navigation, actions, and text at the top of a screen. React Native Paper provides component ",(0,o.jsx)(t.code,{children:"Appbar"})," that we will display in our ",(0,o.jsx)(t.code,{children:"App"})," component. The ",(0,o.jsx)(t.code,{children:"mode"})," prop defines the height of the Appbar (small, medium, large, center-aligned)."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="App.js',children:"import { PaperProvider, Appbar } from 'react-native-paper';\nimport { StatusBar } from 'expo-status-bar';\nimport GitExplorer from './GitExplorer'\n\nexport default function App() {\n  return (\n    <PaperProvider>\n      // highlight-start\n      <Appbar mode=\"medium\" elevated>\n        <Appbar.Content title=\"GitExplorer\" />\n      </Appbar>\n       // highlight-end\n      <GitExplorer />\n      <StatusBar style=\"auto\" />\n    </PaperProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"Now, you should see the app bar at the top of you app."}),"\n",(0,o.jsx)(t.h4,{id:"button--textinput",children:"Button & TextInput"}),"\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.code,{children:"GitExplorer"})," component, we need two states to store keyword and repositories."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="GitExplorer.js"',children:"// highlight-next-line\nimport { useState } from 'react';\nimport { StyleSheet, View } from 'react-native';\n\nexport default function GitExplorer() {\n  // highlight-start\n  const [keyword, setKeyword] = useState('');\n  const [repositories, setRepositories] = useState([]);\n  // highlight-end\n\n  return (\n    <View style={styles.container}>\n    </View>\n  );\n}\n\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Then, we render ",(0,o.jsx)(t.code,{children:"TextInput"})," component that allows user to input keyword that is used in the fetch request. The React Native Paper ",(0,o.jsx)(t.code,{children:"TextInput"})," component have similar props than React Native component (such as value, onChange etc.). React Native Paper ",(0,o.jsx)(t.code,{children:"TextInput"})," provides additional props for Material Design-specific features such as ",(0,o.jsx)(t.code,{children:"label"}),". The ",(0,o.jsx)(t.code,{children:"label"})," prop is used to provide a floating label for the input field."]}),"\n",(0,o.jsxs)(t.p,{children:["The React Native ",(0,o.jsx)(t.code,{children:"Button"})," component renders a basic button with platform-specific styling. It has a simple appearance and is not highly customizable in terms of design. React Native Paper's ",(0,o.jsx)(t.code,{children:"Button"})," component, on the other hand, follows Material Design guidelines and offers more styling options out of the box. In our app we are using contained button and that can be defined using the ",(0,o.jsx)(t.code,{children:"mode"})," props. We also display web search icon in our button using the ",(0,o.jsx)(t.code,{children:"icon"})," props. See the list of supported icons in ",(0,o.jsx)(t.a,{href:"https://callstack.github.io/react-native-paper/docs/guides/icons",children:"https://callstack.github.io/react-native-paper/docs/guides/icons"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="GitExplorer.js"',children:"import { useState } from 'react';\n// highlight-next-line\nimport { Button, TextInput } from 'react-native-paper';\nimport { StyleSheet, View } from 'react-native';\n\nexport default function GitExplorer() {\n  const [keyword, setKeyword] = useState('');\n  const [repositories, setRepositories] = useState([]);\n\n  return (\n    <View style={styles.container}>\n      // highlight-start\n      <TextInput\n        style={{ width: '90%', marginBottom: 10 }} \n        label=\"Keyword\"\n        value={keyword}\n        onChangeText={text => setKeyword(text)}\n      />\n      <Button mode=\"contained\" icon=\"search-web\">\n        Search\n      </Button>\n      // highlight-end\n    </View>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"In this phase, your app should look like the image below:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(7968).A+"",width:"324",height:"666"})}),"\n",(0,o.jsx)(t.h4,{id:"fetch",children:"Fetch"}),"\n",(0,o.jsxs)(t.p,{children:["Next, we implement the network request to fetch repositories. Add the following function in your ",(0,o.jsx)(t.code,{children:"GitExplorer"})," component."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const handleFetch = () => {\n  fetch(`https://api.github.com/search/repositories?q=${keyword}`)\n  .then(response => {\n    if (!response.ok)\n      throw new Error("Error in fetch: " + response.statusText);\n\n    return response.json();\n  })\n  .then(data => setRepositories(data.items))\n  .catch(err => console.error(err))\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"handleFetch"})," function is executed when the button is pressed."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="GitExplorer.js"',children:'  return (\n    <View style={styles.container}>\n      <TextInput\n        style={{ width: \'90%\', marginBottom: 10 }} \n        label="Keyword"\n        value={keyword}\n        onChangeText={text => setKeyword(text)}\n      />\n      // highlight-next-line\n      <Button mode="contained" icon="search-web" onPress={handleFetch}>\n        Search\n      </Button>\n    </View>\n  );\n\n'})}),"\n",(0,o.jsx)(t.h4,{id:"flatlist--card",children:"Flatlist & Card"}),"\n",(0,o.jsxs)(t.p,{children:["Then we display repositories using the React Native ",(0,o.jsx)(t.code,{children:"FlatList"})," component. Now, each row is displayed using React Native Paper ",(0,o.jsx)(t.code,{children:"Card"})," component (",(0,o.jsx)(t.a,{href:"https://callstack.github.io/react-native-paper/docs/components/Card/",children:"https://callstack.github.io/react-native-paper/docs/components/Card/"}),"). To show text we use React Native Paper ",(0,o.jsx)(t.code,{children:"Text"})," component that provides pre-defined text styles. You can see all styles in ",(0,o.jsx)(t.a,{href:"https://callstack.github.io/react-native-paper/docs/components/Text/",children:"https://callstack.github.io/react-native-paper/docs/components/Text/"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"First, Import required component:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="GitExplore.js"',children:"import { useState } from 'react';\nimport { Button, TextInput, Card, Text } from 'react-native-paper'; // Import Card and Text\nimport { StyleSheet, View, FlatList } from 'react-native'; // Import FlatList\n\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Then render ",(0,o.jsx)(t.code,{children:"FlatList"})," component:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="GitExplorer.js"',children:'  return (\n    <View style={styles.container}>\n      <TextInput\n        style={{ width: \'90%\', marginBottom: 10 }} \n        label="Keyword"\n        value={keyword}\n        onChangeText={text => setKeyword(text)}\n      />\n      <Button mode="contained" icon="search-web" onPress={handleFetch}>\n        Search\n      </Button>\n      // highlight-start\n      <FlatList \n        style={{ marginTop: 10, width: \'90%\'}}\n        data={repositories}\n        renderItem={({item}) => \n          <Card style={{ marginBottom: 10 }}>\n            <Card.Title title={item.full_name} />\n            <Card.Content>\n              <Text variant="bodyMedium">{item.description}</Text>\n            </Card.Content>        \n          </Card>\n        }\n      />\n      // highlight-end\n    </View>\n  );\n'})}),"\n",(0,o.jsx)(t.p,{children:"Now, You should see the repositories in the list when you type a keyword and press 'Search'-button."}),"\n",(0,o.jsx)(t.h4,{id:"web-browser",children:"Web Browser"}),"\n",(0,o.jsxs)(t.p,{children:["Next, we implement the feature that user can browse the github site from the list. We use ",(0,o.jsx)(t.code,{children:"Card.Action"})," component to show a button inside the ",(0,o.jsx)(t.code,{children:"Card"})," component. We use ",(0,o.jsx)(t.code,{children:"IconButton"})," component which displays only an icon without a label. When the button is pressed, we call ",(0,o.jsx)(t.code,{children:"handleBrowse"})," function and pass repository url as an argument."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="GitExplore.js"',children:'// Import IconButton from react-native-paper\n\nrenderItem={({item}) => \n  <Card style={{ marginBottom: 10 }}>\n    <Card.Title title={item.full_name} />\n    <Card.Content>\n      <Text variant="bodyMedium">{item.description}</Text>\n    </Card.Content>  \n    <Card.Actions>\n      <IconButton icon="web" onPress={() => handleBrowse(item.html_url)} />\n    </Card.Actions>       \n  </Card>\n  }\n/>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Then, we implement the ",(0,o.jsx)(t.code,{children:"handleBrowse"})," function that opens device browser and navigates to Github repository. We use Expo SDK's ",(0,o.jsx)(t.strong,{children:"WebBrowser"})," library that provides access to device's web browser. Install the WebBrowser library using the following command:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npx expo install expo-web-browser\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Import ",(0,o.jsx)(t.code,{children:"WebBrowser"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="GitExplorer.js"',children:"import * as WebBrowser from 'expo-web-browser';\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"handleBrowse"})," is an asynchronous function declared using the ",(0,o.jsx)(t.code,{children:"async"})," keyword. It takes a parameter url, which represents the URL of the repository to browse. The ",(0,o.jsx)(t.code,{children:"openBrowserAsync"})," function opens the default web browser on the device and opens the provided URL:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="GitExplorer.js"',children:"const handleBrowse = async (url) => {\n  try {\n    let result = await WebBrowser.openBrowserAsync(url);\n  } catch (error) {\n    console.error('Error occurred while opening the browser:', error);\n  }\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"When you press the icon button, device's default web browser is opened and it displays the GitHub repository page."}),"\n",(0,o.jsx)(t.h4,{id:"loading-indicator",children:"Loading indicator"}),"\n",(0,o.jsxs)(t.p,{children:["In the final step, we implement loading indicator. The React Native ",(0,o.jsx)(t.code,{children:"Button"})," component has ",(0,o.jsx)(t.code,{children:"laoding"})," boolean props that determines whether the button should display a loading indicator."]}),"\n",(0,o.jsxs)(t.p,{children:["First, we create a new state ",(0,o.jsx)(t.code,{children:"loading"})," that is used to control whether a loading indicator should be displayed on the search button. When the component first renders, there are no ongoing loading operations; therefore, the ",(0,o.jsx)(t.code,{children:"loading"})," state intial value is ",(0,o.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="GitExplore.js"',children:"const [loading, setLoading] = useState(false);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["When ",(0,o.jsx)(t.code,{children:"handleFetch"})," function is called, we set ",(0,o.jsx)(t.code,{children:"loading"})," state to ",(0,o.jsx)(t.code,{children:"true"}),". This indicates that a loading operation is in progress and loading indicator should be visible. When the response from the API is received or an error occurs, the ",(0,o.jsx)(t.code,{children:"loading"})," state is set back to ",(0,o.jsx)(t.code,{children:"false"}),". This indicates that the fetch operation has completed, and the loading indicator should dissapear."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="GitExplore.js"',children:'const handleFetch = () => {\n  // highlight-next-line\n  setLoading(true);\n  fetch(`https://api.github.com/search/repositories?q=${keyword}`)\n  .then(response => {\n    if (!response)\n      throw new Error("Error in fetch: " + response.statusText);\n \n    return response.json();\n  })\n  .then(data => setRepositories(data.items))\n  .catch(err =>  { \n    console.error(err);\n  })\n  // highlight-next-line\n  .finally(() => setLoading(false))\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["In the Search button the loading prop is passed as ",(0,o.jsx)(t.code,{children:"loading={loading}"}),", meaning it takes the value of the ",(0,o.jsx)(t.code,{children:"loading"})," state defined in the component's state."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="GitExplore.js"',children:'<Button loading={loading} mode="contained" icon="search-web" onPress={handleFetch}>\n  Search\n</Button>  \n'})}),"\n",(0,o.jsx)(t.p,{children:"Now when type a keyword and press Search button, you should see the loading indicator inside the button."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7968:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/gitexplorer1-06070691e9b1daafe76c4c18eaab5e77.png"},1538:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/repofinder-1a843762a9cdd9fade6a4ed595c17734.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);