---
title: "Contacts"
sidebar_position: 4
---
### EXPO Contacts
EXPO Contacts (https://docs.expo.dev/versions/latest/sdk/contacts/) can be used to get access your device’s contacts. First, you have to install `expo-contacts` using the following command in your app directory.
```bash
npx expo install expo-contacts 
```
In the following example, we create an app that fetch phone number from the contacts and send sms message to this number.

First, we have to import the `expo-contacts` and `expo-sms`.
```js
import * as Contacts from 'expo-contacts';
import * as SMS from 'expo-sms';
```
Next, we check permission to be able to access the device’s contacts. The  `requestPermissionsAsync()` function is called to request permission to access the contacts on the user's device. It returns a promise that resolves to a `PermissionResponse` object. We destruct the resolved object to extract the `status` property.

```js
const { status } = await Contacts.requestPermissionsAsync();
```
The value of `status` is `granted` if user has granted the permission. 

```js
if (status === 'granted') {
  // Access contacts 
}
```
The `getContactsAsync(query)` method is used to get contacts from your device and it is asynchronous. The `query` is an optional object that can contain properties to filter and sort the contacts. The `getContactsAsync` method returns a promise that resolves to a `ContactResponse` object. The object contains `data` property that is an array of contacts that match a given query.

```js
const getContacts = async () => {
  const { status } = await Contacts.requestPermissionsAsync();
  if (status === 'granted') {
    const { data } = await Contacts.getContactsAsync(
      { fields: [Contacts.Fields.PhoneNumbers] }
    );
   }
}
```
In the function's `query`, we define that we want to get phone numbers. You can also use for example, `Contacts.Fields.Emails` to get email addresses. Then, we can check if there are contacts available, and save the first contact object to a state.

```js
const [contact, setContact] = useState({});

const getContacts = async () => {
  const { status } = await Contacts.requestPermissionsAsync();
  if (status === 'granted') {
    const { data } = await Contacts.getContactsAsync(
      { fields: [Contacts.Fields.PhoneNumbers] }
    );

    if (data.length > 0) {
      setContact(data[0]);
    }
    else {
      Alert.alert("Warning", "No contacts found.");      
    }
  }
}

```
Contact object looks the following (Android)

```js
Object {
  "contactType": "person",
  "firstName": "Lisa",
  "id": "1",
  "imageAvailable": false,
  "lastName": "Smith",
  "lookupKey": "0r1-3B5137293739433D513F29",
  "name": "Lisa Smith",
  "phoneNumbers": Array [
    Object {
      "id": "1",
      "isPrimary": 0,
      "label": "mobile",
      "number": "1 234-566-985",
      "type": "2",
    },
  ],
}
```
In the `return` statement, we add the `Button` and `Text` components. The button execute the `getContacts` function and the name of the first contact is displayed in the `Text` component.

```jsx
return (
  <View style={styles.container}>
    <Text>{contact.name}</Text>
    <Button title="Get Contact" onPress={getContacts} />
  </View>
);
```
Now, You should see the first contact’s name when you press the button.

![](img/contacts.png)

### EXPO SMS
EXPO SMS (https://docs.expo.dev/versions/latest/sdk/sms/) can be used to get access to device’s SMS messages. You can install it by typing the following command in your app directory.
```bash
npx expo install expo-sms 
```
Next, we will implement function to send SMS message to the contact.
The `isAvailableAsync()` method can be used to check if SMS is available in a device.

```js
const sendSms = async () => {
  const isSMSAvailable = await SMS.isAvailableAsync();
  
  if (isSMSAvailable) {
    // Send a message
  }
}
```
The SMS message can be sent using the `sendSMSAsync(addresses, message, options)` method. The first argument is an array of phone numbers and the second argument is a message to be sent. The third optional argument can be used to define additional SMS configuration options. The `sendSMSAsync`returns a promise that resolves to an object containing the result of the SMS sending operation (sent, cancelled, unknown). 

```js
const sendSms = async () => {
  const isSMSAvailable = await SMS.isAvailableAsync();

  if (isSMSAvailable && contact.phoneNumbers.length > 0) {
    const { result } = await SMS.sendSMSAsync([contact.phoneNumbers[0].number], 
      'Hello ' + contact.name);
  }
}
```
Finally, we add a button to send SMS message.
```js
return (
  <View style={styles.container}>
    <Text>{contact.name}</Text>
    <Button title="Get Contact" onPress={getContacts} />
    <Button title="Send SMS" onPress={sendSms} />
  </View>
);
```

![](img/sms.png)

