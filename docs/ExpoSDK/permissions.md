---
title: "Permissions"
sidebar_position: 2
---
In React Native Expo apps, **permissions** are needed when your application requires access to certain device resources or features, such as the camera, location, contacts, or microphone.

Permissions ensure that users have control over what information and capabilities your app can access on their device. If your app doesn't have the correct permissions set up, it will either crash or silently fail when trying to access those features — and it may be **rejected from the App Store or Google Play**.

### How permissions work
When your app first tries to access a protected feature, the operating system shows the user a dialog box asking them to allow or deny access. Your app must handle both cases gracefully.

Most Expo SDK libraries provides hook or async function to request permissions. The general pattern is:
```js
import * as Location from 'expo-location';

const getLocation = async () => {
  // Ask the user for permission
  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    alert('Permission to access location was denied.');
    return;
  }

  // Permission granted
  const location = await Location.getCurrentPositionAsync({});
  console.log(location);
};
```
Always check the `status` value before trying to use the feature. The status can be `'granted'`, `'denied'`, or `'undetermined'`.

Some permissions also need to be declared in your `app.json` before building the app. This is required for standalone builds (e.g., built with EAS Build) and it is not needed when testing in Expo Go.

### Read more
- Expo Permissions: https://docs.expo.dev/guides/permissions/

