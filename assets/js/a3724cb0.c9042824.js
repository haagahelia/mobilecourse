"use strict";(self.webpackChunkmobilecourse=self.webpackChunkmobilecourse||[]).push([[6041],{1379:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(4848),t=n(8453);const a={title:"Camera",sidebar_position:3},r=void 0,i={id:"ExpoSDK/camera",title:"Camera",description:"CameraView is the component that renders a preview of the device\u2019s camera.",source:"@site/docs/ExpoSDK/camera.md",sourceDirName:"ExpoSDK",slug:"/ExpoSDK/camera",permalink:"/mobilecourse/docs/ExpoSDK/camera",draft:!1,unlisted:!1,editUrl:"https://github.com/haagahelia/mobileprogramming.git/docs/ExpoSDK/camera.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Camera",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Permission",permalink:"/mobilecourse/docs/ExpoSDK/permissions"},next:{title:"Contacts",permalink:"/mobilecourse/docs/ExpoSDK/contacts"}},c={},d=[{value:"Example",id:"example",level:4}];function l(e){const s={admonition:"admonition",code:"code",h4:"h4",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"CameraView"})," is the component that renders a preview of the device\u2019s camera."]}),"\n",(0,o.jsx)(s.p,{children:"Installation:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"npx expo install expo-camera\n"})}),"\n",(0,o.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(s.p,{children:"In this example, users can take a photo which is then displayed in the app. The example app shows the viewfinder and taken picture in two different representations: base64 and local uri."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:n(6530).A+"",width:"342",height:"608"})}),"\n",(0,o.jsxs)(s.p,{children:["Import ",(0,o.jsx)(s.code,{children:"Camera"})," and ",(0,o.jsx)(s.code,{children:"useCameraPermissions"})," from ",(0,o.jsx)(s.code,{children:"expo-camera"})," to your component. The ",(0,o.jsx)(s.code,{children:"useCameraPermissions"})," is hook function to check or request permissions to access the camera."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"import { CameraView, useCameraPermissions } from 'expo-camera';\n"})}),"\n",(0,o.jsxs)(s.p,{children:["We use states to store photo data. We also have to create a ",(0,o.jsx)(s.code,{children:"ref"})," to camera component using ",(0,o.jsx)(s.code,{children:"useRef"})," hook. By using ",(0,o.jsx)(s.code,{children:"ref"})," we can get access to camera component's methods."]}),"\n",(0,o.jsxs)(s.p,{children:["We check the permission to access camera by using the ",(0,o.jsx)(s.code,{children:"useCameraPermissions"})," hook and the ",(0,o.jsx)(s.code,{children:"permission"})," state value is ",(0,o.jsx)(s.code,{children:"granted"})," if user has granted the permission."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"const [photoName, setPhotoName] = useState('');\nconst [photoBase64, setPhotoBase64] = useState('');\nconst [permission, requestPermission] = useCameraPermissions();\n\nconst camera = useRef(null);\n"})}),"\n",(0,o.jsxs)(s.p,{children:["In the ",(0,o.jsx)(s.code,{children:"return"})," statement, we use conditional rendering. If the app has no permission to use camera we show a text 'No access to camera'.  Otherwise camera, photo previews and button are rendered."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-jsx",children:'return (\n  <View style={styles.container}>\n    {permission === \'granted\' ? (\n        <View style={{ flex: 1 }}>\n          <CameraView style={{ flex: 1, minWidth: "100%" }} ref={camera} />\n          <Button title="Take Photo" onPress={snap} />\n          <View style={{ flex: 1 }}>\n            <Image style={{ flex: 1 }} source={{ uri: photoName }} />\n            <Image style={{ flex: 1 }} source={{ uri: `data:image/jpg;base64,${photoBase64}` }} />\n          </View>\n        </View>\n      ) : (\n        <Text>No access to camera</Text>\n      )}\n  </View>\n);\n'})}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"Button"})," component invokes a function called ",(0,o.jsx)(s.code,{children:"snap"})," that takes a photo."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:'<Button title="Take Photo" onPress={snap} />\n'})}),"\n",(0,o.jsxs)(s.p,{children:["Below is the source code of the ",(0,o.jsx)(s.code,{children:"snap"})," function. Camera\u2019s ",(0,o.jsx)(s.code,{children:"takePictureAsync"})," method returns an object with properties: ",(0,o.jsx)(s.code,{children:"uri"}),", ",(0,o.jsx)(s.code,{children:"base64"}),", ",(0,o.jsx)(s.code,{children:"width"}),", ",(0,o.jsx)(s.code,{children:"height"})," and ",(0,o.jsx)(s.code,{children:"exif"}),". The ",(0,o.jsx)(s.code,{children:"base64"})," is string that contains JPEG data of the image (base64 encoded)."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"const snap = async () => {\n  if (camera) {\n    const photo = await camera.current.takePictureAsync({base64: true});\n    setPhotoName(photo.uri);\n    setPhotoBase64(photo.base64); \n  }\n};\n"})}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsxs)(s.p,{children:["The local image URI is temporary. You can use EXPO ",(0,o.jsx)(s.code,{children:"FileSystem.copyAsync"})," to make a permanent copy of the image."]})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},6530:(e,s,n)=>{n.d(s,{A:()=>o});const o=n.p+"assets/images/camera-30bcb95b09e1b7d078b65e778c67694e.png"},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>i});var o=n(6540);const t={},a=o.createContext(t);function r(e){const s=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(a.Provider,{value:s},e.children)}}}]);