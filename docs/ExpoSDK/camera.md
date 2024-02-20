---
title: "Camera"
sidebar_position: 3
---
- `Camera` is the component that renders a preview of the device’s camera.
- Installation:
```bash
npx expo install expo-camera
```
- Example: User can take a photo which is then shown in the app.
- Import `Camera` from `expo-camera` to your component
```js
import { Camera } from 'expo-camera';
```
 
- The following example app shows the viewfinder and taken picture in two different ways (base64 and local uri). When you press 'Take photo'- button the photo is taken.

![](img/camera.png)

- States are needed for the image and permission. We also have to create a ref to camera component using `useRef` hook. By using `ref` we can get access to camera component's methods.

```js
const [hasCameraPermission, setPermission] = useState(null);
const [photoName, setPhotoName] = useState('');
const [photoBase64, setPhotoBase64] = useState('');

const camera = useRef(null);
```
- We check the permission to use camera by using the `useEffect` hook. 

```js
useEffect(() => {
  askCameraPermission();
}, []);

const askCameraPermission = async () => {
  const { status } = await Camera.requestCameraPermissionsAsync();
  setPermission( status == 'granted' );
}
```
- In the `return` statement, we use conditional rendering. If the app has no permission to use camera we show a text 'No access to camera'.  Otherwise camera, photo previews and button are rendered.

```jsx
return (
  <View style={styles.container}>
    {hasCameraPermission ? (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1, minWidth: "100%" }} ref={camera} />
          <Button title="Take Photo" onPress={snap} />
          <View style={{ flex: 1 }}>
            <Image style={{ flex: 1 }} source={{ uri: photoName }} />
            <Image style={{ flex: 1 }} source={{ uri: `data:image/gif;base64,${photoBase64}` }} />
          </View>
        </View>
      ) : (
        <Text>No access to camera</Text>
      )}
  </View>
);
```
- The `Button` component invokes a function called `snap` that takes a photo.
```js
<Button title="Take Photo" onPress={snap} />
```
- Below is the source code of the `snap` function. Camera’s `takePictureAsync` method returns an object { uri, base64, width, height, exif }. Base64 is string that contains JPEG data of the image (base64 encoded).

```js
const snap = async () => {
  if (camera) {
    const photo = await camera.current.takePictureAsync({base64: true});
    setPhotoName(photo.uri);
    setPhotoBase64(photo.base64); 
  }
};
```