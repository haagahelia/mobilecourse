"use strict";(self.webpackChunkmobilecourse=self.webpackChunkmobilecourse||[]).push([[6959],{5021:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=i(4848),o=i(8453);const t={title:"Deployment",sidebar_position:1},r=void 0,l={id:"Deployment/general",title:"Deployment",description:"- During development time we run the packager and development server locally on the workstation.",source:"@site/docs/Deployment/general.md",sourceDirName:"Deployment",slug:"/Deployment/general",permalink:"/mobilecourse/docs/Deployment/general",draft:!1,unlisted:!1,editUrl:"https://github.com/haagahelia/mobileprogramming.git/docs/Deployment/general.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Deployment",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/mobilecourse/docs/category/deployment"}},d={},a=[{value:"Deploying apps to other users",id:"deploying-apps-to-other-users",level:3},{value:"Building standalone apps for Android and iOS",id:"building-standalone-apps-for-android-and-ios",level:3},{value:"Building for internal distribution on Android",id:"building-for-internal-distribution-on-android",level:3},{value:"Building for internal distribution on iOS",id:"building-for-internal-distribution-on-ios",level:3},{value:"Deploying to App Stores",id:"deploying-to-app-stores",level:3},{value:"Further information about publishing to app stores",id:"further-information-about-publishing-to-app-stores",level:3},{value:"Some issues to consider when publishing",id:"some-issues-to-consider-when-publishing",level:3},{value:"Read more",id:"read-more",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(7861).A+"",width:"543",height:"512"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"During development time we run the packager and development server locally on the workstation."}),"\n",(0,s.jsx)(n.li,{children:"The Expo Go client loads the app from the local development server"}),"\n",(0,s.jsx)(n.li,{children:"Many clients can load the app from the development server but if we close the development server, the apps stop"}),"\n",(0,s.jsx)(n.li,{children:"This makes sharing the app to others problematic"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"deploying-apps-to-other-users",children:"Deploying apps to other users"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Running apps using the Expo Go client is feasible for development and testing purposes"}),"\n",(0,s.jsx)(n.li,{children:"In order to be able to share the app to other users we need to create a standalone application"}),"\n",(0,s.jsx)(n.li,{children:"The standalone binary app can be distributed in the app distribution channels, i.e. Apple App Store and/or Google Play Store. It can also be deployed to emulators or test devices directly"}),"\n",(0,s.jsx)(n.li,{children:"We will cover both publishing options here. They are both useful but for different purposes."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"building-standalone-apps-for-android-and-ios",children:"Building standalone apps for Android and iOS"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In order to be able to deploy standalone apps we need to create different native builds for the different platforms"}),"\n",(0,s.jsxs)(n.li,{children:["This can be done using ",(0,s.jsx)(n.strong,{children:"Expo Application Services (EAS)"})," tools (",(0,s.jsx)(n.a,{href:"https://expo.dev/eas",children:"https://expo.dev/eas"}),"):"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install -g eas-cli    # install EAS tools globally\neas login                 # you need to have an Expo account to use EAS\neas build:configure       # create EAS configuration for your project\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Now you can make different builds for different purposes (development, preview, production) and platforms (Android, iOS)."}),"\n",(0,s.jsx)(n.li,{children:"The build will be done as a Continuous Integration (CI) build on Expo servers: the entire project is uploaded to the cloud, then downloaded by a build server, the dependencies are installed, and the build is run."}),"\n"]}),"\n",(0,s.jsxs)("p",{children:[" ",(0,s.jsx)(n.a,{href:"https://docs.expo.dev/build/setup/",children:"https://docs.expo.dev/build/setup/"})," "]}),"\n",(0,s.jsx)(n.h3,{id:"building-for-internal-distribution-on-android",children:"Building for internal distribution on Android"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For Android you can build an apk-binary that can be installed on an emulator or a device directly."}),"\n",(0,s.jsxs)(n.li,{children:["You may need to modify the build profile definition in ",(0,s.jsx)(n.code,{children:"eas.json"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "build": {\n    "preview": {\n      "android": {\n        "buildType": "apk"\n      }\n    },\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Run build"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"eas build -p android --profile preview\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"When the build is complete, download and install the binary on an emulator or a device."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.expo.dev/build-reference/apk/",children:"https://docs.expo.dev/build-reference/apk/"})}),"\n",(0,s.jsx)(n.h3,{id:"building-for-internal-distribution-on-ios",children:"Building for internal distribution on iOS"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For iOS you can build a iOS simulator build"}),"\n",(0,s.jsxs)(n.li,{children:["You may need to modify the build profile definition in ",(0,s.jsx)(n.code,{children:"eas.json"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "build": {\n    "preview": {\n      "ios": {\n        "simulator": true\n      }\n    },\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Run build"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"eas build -p ios --profile preview\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"When the build is complete, download and install the binary on an emulator or a device."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.expo.dev/build-reference/simulators/",children:"https://docs.expo.dev/build-reference/simulators/"})}),"\n",(0,s.jsx)(n.h3,{id:"deploying-to-app-stores",children:"Deploying to App Stores"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To make the app publicly available it needs to be built and submitted to the app store of each platform"}),"\n",(0,s.jsx)(n.li,{children:"Each platform has different requirements for publishing. There are also approval phases that the app needs to pass before it is made avaible in the app store"}),"\n",(0,s.jsxs)(n.li,{children:["Publishing to app stores is not free","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Google has a one time $25 registration fee which you need to pay before you can upload an app."}),"\n",(0,s.jsx)(n.li,{children:"Distribution via the Apple app store goes for an annual fee of USD$99"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"further-information-about-publishing-to-app-stores",children:"Further information about publishing to app stores"}),"\n",(0,s.jsx)(n.p,{children:"EAS:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Submitting to Google Play Store: ",(0,s.jsx)(n.a,{href:"https://docs.expo.dev/submit/android/",children:"https://docs.expo.dev/submit/android/"})]}),"\n",(0,s.jsxs)(n.li,{children:["Submitting to Apple App Store: ",(0,s.jsx)(n.a,{href:"https://docs.expo.dev/submit/ios/",children:"https://docs.expo.dev/submit/ios/"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Android:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.android.com/studio/publish",children:"https://developer.android.com/studio/publish"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.androidauthority.com/publishing-first-app-play-store-need-know-383572",children:"https://www.androidauthority.com/publishing-first-app-play-store-need-know-383572"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"iOS:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.apple.com/distribute/",children:"https://developer.apple.com/distribute/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.apple.com/ios/submit/",children:"https://developer.apple.com/ios/submit/"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"some-issues-to-consider-when-publishing",children:"Some issues to consider when publishing"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Make sure that your app layout works in different screen form factors","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"small and large display sizes, handsets and tablets"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["App icon","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Expo tools can create the required different size icons, just provide an png icon file of adequate size and configure it in app.json"}),"\n",(0,s.jsx)(n.li,{children:"Platforms have different icon guidelines. You can provide a different icon file for each platform in app.json."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Splash screen","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Splash screen is the first screen that a user sees when opening your app. It stays visible while the app is loading."}),"\n",(0,s.jsx)(n.li,{children:"You can define the splash screen image in app.json."}),"\n",(0,s.jsx)(n.li,{children:"You can control the behavior of the splash screen with the AppLoading component in the App."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["App stores best practices: ",(0,s.jsx)(n.a,{href:"https://docs.expo.dev/distribution/app-stores/",children:"https://docs.expo.dev/distribution/app-stores/"})]}),"\n",(0,s.jsx)(n.h3,{id:"read-more",children:"Read more"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Expo Go: ",(0,s.jsx)(n.a,{href:"https://docs.expo.dev/workflow/expo-go/",children:"https://docs.expo.dev/workflow/expo-go/"})]}),"\n",(0,s.jsxs)(n.li,{children:["Distributing your app: ",(0,s.jsx)(n.a,{href:"https://docs.expo.dev/distribution/introduction/",children:"https://docs.expo.dev/distribution/introduction/"})]}),"\n",(0,s.jsxs)(n.li,{children:["Configuring the app (app.json): ",(0,s.jsx)(n.a,{href:"https://docs.expo.dev/versions/latest/config/app/",children:"https://docs.expo.dev/versions/latest/config/app/"})]}),"\n",(0,s.jsxs)(n.li,{children:["Splash screen and app icon: ",(0,s.jsx)(n.a,{href:"https://docs.expo.dev/tutorial/configuration/",children:"https://docs.expo.dev/tutorial/configuration/"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},7861:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/expo_devtools-87d47e7d3cfdd1fb687d4b425b07f223.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);