---
title: "SQLite"
sidebar_position: 2
---
**SQLite**  (https://www.sqlite.org/) is light-weight SQL database and it is built into both Android and iOS devices.`expo-sqlite` is the library that gives an access to SQLite database on the device.

Installation:
```bash
npx expo install expo-sqlite 
```

Example: Courselist app where user types course title and credits. The course is saved to a database when save button is pressed. All courses are shown in the flatlist component.

![](img/courselist.png)

First, import the SQLite from `expo-sqlite` to your Component
```js
import * as SQLite from 'expo-sqlite';
```
States are needed for title and credit input fields and all courses that are shown in the `FlatList`.

```js
 const [credit, setCredit] = useState('');
 const [title, setTitle] = useState('');
 const [courses, setCourses] = useState([]);
```
Next, we intialize the database connection using the `openDatabaseSync` function.  The function takes a single argument, which is the name of the SQLite database file to open or create. If the specified database file exists, it will be opened. If it doesn't exist, a new database file with that name will be created.

```js
const db = SQLite.openDatabaseSync('coursedb');
```

:::note
  The library has synchronous and asynchronous versions of functions. Running heavy tasks with synchronous functions can block the JavaScript thread and affect performance.

  We will be using mostly asynchronous functions in this example. For simplicity, we make here a synchronous call to open the database.
:::

Opening the database returns database object. Using the methods of the database object we can make SQL queries. 

First we need create the database schema in case this is the first invocation of the application. We write a function to create the schema and use the `execAsync` method to make the SQL query.

```js
const initialize = async () => {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS course (id INTEGER PRIMARY KEY NOT NULL, credits INT, title TEXT);
    `);
    // Todo: update the course list
  } catch (error) {
    console.error('Could not open database', error);
  }
}
```
:::note
  Because we use the `async`-`await`syntax to handle the asynhronous calls we need to use exception handling to handle possible database errors. 
:::

The application logic would require that we retrieve the course list from the database and render it for the user at startup. The function to do that will be implemented later. 

We make only one query but multiple queries could be done in one `execAsync` call. For that reason we need to terminate the query with a semicolon (`;`).

The database initialization function is called using the `useEffect` hook. 

```js
useEffect(() => { initialize() }, []);
```
Next we need a way to create content in the database. We add two input fields (title and credits) and a button to save the new item to the database when pressed. The button will call function `saveItem`.

```jsx
<TextInput 
  placeholder='Title' 
  onChangeText={title => setTitle(title)}
  value={title}/> 
<TextInput 
  placeholder='Credits' 
  keyboardType='numeric' 
  onChangeText={credit => setCredit(credit)}
  value={credit}/> 
<Button onPress={saveItem} title="Save" />
```
We write function `saveItem` to make the `INSERT` query to add rows into the database. We use `runAsync` method to make the query. 

```js
const saveItem = async () => {
  try {
    await db.runAsync('INSERT INTO course VALUES (?, ?, ?)', null, credit, title);
    // Todo: update the course list
  } catch (error) {
    console.error('Could not add item', error);
  }
};
```

Finally we can implement the function `updateList` to get the list of courses from the database. The function makes a `SELECT` query using method `getAllAsync` to fetch all rows from the course table and updates the data to state variable `courses`. The state update launches a re-render.

```js
  const updateList = async () => {
    try {
      const list = await db.getAllAsync('SELECT * from course');
      setCourses(list);
    } catch (error) {
      console.error('Could not get items', error);
    }
  }
```

The `updateList` function should be executed at first render and after any successful change in the database. Add the `updateList` call to the placeholders in the functions defined earlier.

In the `FlatList` component, we show the title and credits of the courses. For deleting courses we add a `Text` component on each row and attach an `onPress` action to that calls function `deleteItem` to each component. The unique id of the item is passed to the delete function.

```jsx
<FlatList
  keyExtractor={item => item.id.toString()}
  renderItem={({ item }) =>
    <View style={styles.itemcontainer}>
      <Text>{item.title}</Text>
      <Text>{item.credits} </Text>
      <Text style={{ color: '#0000ff' }} onPress={() => deleteItem(item.id)}>done</Text>
    </View>}
  data={courses}
/>
```

The `deleteItem` function deletes item from the course table and updates the course list after the deletion.

```js
const deleteItem = async (id) => {
    console.log('deleteItem')
    try {
      await db.runAsync('DELETE FROM course WHERE id=?', id);
      await updateList();
    }
    catch (error) {
      console.error('Could not delete item', error);
    }
  }
```

### Using `SQLiteProvider` component

If there are sevaral components in the application, `SQLiteProvider` component can be used to share the database across the components. All components rendered within a `SQLiteProvider` can access the database using the `useSQLiteContext` hook.

Let us refactor the application into two components: `App` provides the database context to all component within the app and `Courselist` renders the course list application.

```js title="App.jsx"
import { SQLiteProvider } from 'expo-sqlite';
import Courselist from './Courselist';

export default function App() {

  const initialize = async (db) => {
    db.execAsync(`
      CREATE TABLE IF NOT EXISTS course (id INTEGER PRIMARY KEY NOT NULL, credits INT, title TEXT);
    `);
  };

  return (
    <SQLiteProvider
      databaseName='coursedb.db'
      onInit={initialize}
      onError={error => console.error('Could not open database', error)}
    >
      <Courselist />
    </SQLiteProvider>
  );
}
```

`SQLIteProvider` properties:
- `databaseName` defines the database file name. `SQLiteProvider` takes care of opening the database. 
- `onInit ` defines an initialization handler that is run before rendering the children of the component. We use it to create the database schema.
- `onError` handler is called if an error occurs.

The `Courselist` component gets the database object by calling the `useSQLiteContext` hook. 

```js title="Courselist.jsx"
// highlight-next-line
import { useSQLiteContext } from 'expo-sqlite';
// ...

export default function Courselist() {
  const [credit, setCredit] = useState('');
  const [title, setTitle] = useState('');
  const [courses, setCourses] = useState([]);

  // highlight-next-line
  const db = useSQLiteContext();

  const saveItem = async () => {
    try {
      await db.runAsync('INSERT INTO course VALUES (?, ?, ?)', null, credit, title);
      await updateList();
    } catch (error) {
      console.error('Could not add item', error);
    }
  };

  // ...

  // highlight-next-line
  useEffect(() => { updateList() }, []);

  // ...
```
Because the database initialization is done in an other component, we need to launch the initial list update using the `useEffect` hook.