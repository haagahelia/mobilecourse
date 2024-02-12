---
title: "Location"
sidebar_position: 2
---
- Location allows to read geolocation data from the device
- Install the `expo-location` library
```
npx expo install expo-location
```
- See the documentation: https://docs.expo.dev/versions/v43.0.0/sdk/location/
- Import Location to your Component. When using Location we have to check permission  (access to geolocation, contacts etc.).

``` js
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null); // State where location is saved
 
  useEffect(() => {
    // Get location
  }, []);
}
```
- Check the permission first using the `useEffect()` hook.
- The `requestForegroundPermissionsAsync()` method returns `granted` if the permission to use location is ok. 

```js
useEffect(() => {
  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('No permission to get location')
      return;
    }
    // Get location
  })();
}, []);
```
- If permission is `granted`, get the current location.
```js
useEffect(() => {
  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('No permission to get location')
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  })();
}, []);
```
- The `getCurrentPositionAsync()` returns an object `coords` that contains attributes like latitude, longitude, altitude, speed etc.