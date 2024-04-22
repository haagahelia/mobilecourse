---
title: "Expo"
sidebar_position: 2
---
Expo is a set of tools, libraries, and services for building React Native applications more easily and efficiently (https://expo.dev/).

Node.js LTS release version is required.
Linux and macOS users have to install Watchman (https://docs.expo.io/get-started/installation/)

### Create your first app

#### Initialize project 
You can create a new React Native app using the following commands in terminal:
```bash
npx create-expo-app YOUR_APP_NAME
```
Next, move to the project folder and start the development server:
```bash
cd YOUR_APP_NAME
npx expo start
```
#### Install Expo Go
Expo opens Metro Bundler in your terminal after you run your app.

To preview your app on a mobile device, you'll need to install the **Expo Go** (https://expo.dev/client) app to your mobile device. This allows you to view and interact with your Expo projects directly on your iOS or Android device.
#### Open the app on your device:
- **Android**: Open the Expo Go app and navigate to the Projects tab. From there, scan the QR code displayed in your terminal using the Expo Go app. This action will load your app on your Android device.
- **iOS**: Launch the Camera app and point it at the QR code displayed in your terminal. Once the QR code is recognized, tap on the notification prompt to open the Expo Go app. Your app will then be loaded on your iOS device.

Alternatively, you can run your app on an emulator or a USB-connected device. For emulators, you can use Android Studio's Android Virtual Device (AVD) manager for Android emulation or Xcode's iOS Simulator for iOS emulation. Connect a physical device via USB to your computer, ensure it's properly configured for development, and then use Expo CLI to run your app on the connected device.

![w:600 bg right](img/expo.png)

#### Modify your app
Open your expo project using the VSCode. Modify the `return` statement in the **App.js** file. Expo provides **Fast Refresh** and you will see changes immediately in your mobile device.

You can open developer menu in the Expo Go app by shaking your device. There is also manual refresh option if expo fast refresh doesn't work.

```jsx
return (
  <View style={styles.container}>
    <Text>Hello World!</Text>
  </View>
);
```

![w:300 bg right](img/hello.png)

:::note
If you can't get app loading to your device, you can use tunnel connection type. Start your app using the following command:

```bash
npx expo start --tunnel
```
:::