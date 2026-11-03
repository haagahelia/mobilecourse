---
title: "Contacts"
sidebar_position: 4
---
### EXPO Contacts
EXPO Contacts (https://docs.expo.dev/versions/latest/sdk/contacts/) can be used to get access your device’s contacts. First, you have to install `expo-contacts` using the following command in your app directory.
```bash
npx expo install expo-contacts 
```
In the following example, we create an app that fetches the first 20 contacts sorted by last name and shows their full name and phone number in a `FlatList`.

First, we have to import the `Contact` class, `ContactsSortOrder` and `ContactField` from `expo-contacts`. We also import `Contacts` for requesting the permission:
```ts
import * as Contacts from 'expo-contacts';
import { Contact, ContactField, ContactsSortOrder } from 'expo-contacts';
```
Next, we check permission to be able to access the device’s contacts. The  `requestPermissionsAsync()` function is called to request permission to access the contacts on the user's device. It returns a promise that resolves to a `PermissionResponse` object. We destruct the resolved object to extract the `status` property.
```ts
const { status } = await Contacts.requestPermissionsAsync();
```
The value of `status` is `granted` if user has granted the permission. 
```ts
if (status === 'granted') {
  // Access contacts 
}
```
The static `Contact.getAll(options)` method is used to get contacts from your device and it is asynchronous. The `options` is an optional object that can be used to limit, sort and filter the contacts. It returns a promise that resolves to an array of `Contact` instances.

* `limit` – maximum number of contacts to return
* `offset` – number of contacts to skip (useful for paging)
* `sortOrder` – sort order, e.g. `ContactsSortOrder.FamilyName`
* `name` – return only contacts whose name contains the given string

```ts
const contacts = await Contact.getAll({
  limit: 20,
  sortOrder: ContactsSortOrder.FamilyName,
});
```
A `Contact` instance does not contain the contact data itself. The data is fetched with asynchronous methods. The `getDetails(fields)` method fetches the listed fields of one contact. We need the full name and the phone numbers:
```ts
const details = await contact.getDetails([ContactField.FULL_NAME, ContactField.PHONES]);
```
We create a type and a state for the data shown in the list:
```ts
type ContactItem = {
  id: string;
  name: string;
  number: string;
};

const [contacts, setContacts] = useState<ContactItem[]>([]);
```
Contact object looks the following (Android)
```ts
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
Now we can fetch the contacts, get the details of each contact and store them in the state. If a contact has no phone number, we use the text `No number`.
```ts
const getContacts = async () => {
  const { status } = await Contacts.requestPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert('Permission denied', 'Cannot access contacts.');
    return;
  }

  const result = await Contact.getAll({
    limit: 20,
    sortOrder: ContactsSortOrder.FamilyName,
  });

  const items = await Promise.all(
    result.map(async (contact) => {
      const details = await contact.getDetails([ContactField.FULL_NAME, ContactField.PHONES]);
      return {
        id: contact.id,
        name: details.fullName ?? 'No name',
        number: details.phones[0]?.number ?? 'No number',
      };
    })
  );
  setContacts(items);
};
```
`Promise.all` waits until the details of all contacts are fetched, and it keeps the order of the contacts.

In the `return` statement, we add `FlatList` and `Button`. The button executes the `getContacts` function.
```tsx
return (
  <View style={styles.container}>
    <FlatList
      style={{ marginTop: 50 }}
      data={contacts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text>{item.name}, {item.number}</Text>
      )}
    />
    <Button title="Get Contacts" onPress={getContacts} />
  </View>
);
```
UPDATE IMAGE
![](img/contacts.png)

#### getAllDetails
`getAll` creates a `Contact` instance for every contact and then needs one `getDetails` call per contact. `Contact.getAllDetails(fields, options)` is an  alternative. It fetches the chosen fields of all matching contacts with a single call, and it accepts the same options.
```ts
const result = await Contact.getAllDetails(
  [ContactField.FULL_NAME, ContactField.PHONES],
  { limit: 20, sortOrder: ContactsSortOrder.FamilyName }
);

setContacts(result.map((details) => ({
  id: details.id,
  name: details.fullName ?? 'No name',
  number: details.phones[0]?.number ?? 'No number',
})));
```
It is better to use `getAllDetails` when you only need the data to show it in a list. Use `getAll` when you need the `Contact` instance later, e.g. to edit the contact with `contact.patch()`.


