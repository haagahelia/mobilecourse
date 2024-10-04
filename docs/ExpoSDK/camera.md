---
title: "Camera"
sidebar_position: 3
---
`CameraView` is the component that renders a preview of the device’s camera.

Installation:
```bash
npx expo install expo-camera
```
#### Example
In this example, users can take a photo which is then displayed in the app. The example app shows the viewfinder and taken picture in two different representations: base64 and local uri.

![](img/camera.png)

Import `Camera` and `useCameraPermissions` from `expo-camera` to your component. The `useCameraPermissions` is hook function to check or request permissions to access the camera.
```js
import { CameraView, useCameraPermissions } from 'expo-camera';
```
We use states to store photo data. We also have to create a `ref` to camera component using `useRef` hook. By using `ref` we can get access to camera component's methods.

We use the `useCameraPermissions` hook to check the camera access permission. If the permission has been granted by the user, the permission value will be set to `granted`. To request permission from the user, we can call the `requestPermission` function.

```js
const [photoName, setPhotoName] = useState('');
const [photoBase64, setPhotoBase64] = useState('');
const [permission, requestPermission] = useCameraPermissions();

const camera = useRef(null);
```
In the `return` statement, we use conditional rendering. If the app has no permission to use camera, we show a button to prompt the user for permission. Otherwise camera, photo previews and button are rendered.

```jsx
if (!permission) {
  // Camera permissions are still loading.
  return <View />;
}

if (!permission.granted) {
  // Camera permissions are not granted yet.
  return(
    <View style={styles.container}>
      <Button onPress={requestPermission} title="grant permission" />
    </View>
  );
}

return (
  <View style={{ flex: 1 }}>
    <CameraView style={{ flex: 1, minWidth: "100%" }} ref={camera} />
    <Button title="Take Photo" onPress={snap} />
    <View style={{ flex: 1 }}>
      {photoName && photoBase64 ? (
        <>
          <Image style={{ flex: 1 }} source={{ uri: photoName }} />
          <Image style={{ flex: 1 }} source={{ uri: `data:image/jpg;base64,${photoBase64}` }} />
        </>
      ) : (
        <Text>No photo taken yet.</Text>
      )}      
    </View>
  </View>
);
```
The `Button` component invokes a function called `snap` that takes a photo.
```js
<Button title="Take Photo" onPress={snap} />
```
Below is the source code of the `snap` function. Camera’s `takePictureAsync` method returns an object with properties: `uri`, `base64`, `width`, `height` and `exif`. The `base64` is string that contains JPEG data of the image (base64 encoded).

```js
const snap = async () => {
  if (camera) {
    const photo = await camera.current.takePictureAsync({base64: true});
    setPhotoName(photo.uri);
    setPhotoBase64(photo.base64); 
  }
};
```
:::note
The local image URI is temporary. You can use EXPO `FileSystem.copyAsync` to make a permanent copy of the image.
:::
