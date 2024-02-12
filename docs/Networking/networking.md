---
title: "Networking"
sidebar_position: 2
---
- Networking with React native is similar to React.
- In the following example, we use Github repository API to find repositories by keyword.
- We need a state for the repositories that we get from the response and for keyword that we use in the query parameter.
```js
const [keyword, setKeyword] = useState('');
const [repositories, setRepositories] = useState([]);
```
- The following URL is used to get repositories by keyword. Response contains an `item` node that is array of repository objects and we will show the full name and description of each repository.

https://api.github.com/search/repositories?q={keyword}

![w:550](img/github1.png)

- The `return` statement contains input and a button components. The `Button` is used to execute fetch request.

```html
<TextInput 
  style={{fontSize: 18, width: 200}} 
  placeholder='keyword' 
  value={keyword}
  onChangeText={text => setKeyword(text)} 
/>
<Button title="Find" onPress= {getRepositories} />
```
- The `return` contains also `FlatList` component to show response data.
```html
<FlatList
  keyExtractor={(item, index) => index.toString()}
  renderItem={({item}) =>
    <View>
      <Text 
        style={{fontSize: 18, fontWeight: "bold"}}>{item.full_name}
      </Text>
      <Text style={{fontSize: 16 }}>{item.description}</Text>
     </View>}
  data={repositories} /> 
```
- The `getRepositories` function executes the request and gets a query filter value from the `keyword` state. Result array is saved to the `repositories` state from the response.

```js
const getRepositories = () => {
  fetch(`https://api.github.com/search/repositories?q=${keyword}`)
  .then(response => response.json())
  .then(data => setRepositories(data.items))
  .catch(error => { 
        Alert.alert('Error', error); 
  });
}
```
- You can find the App.js code in http://bit.ly/2zSqJIm

![w:250 bg right](img/github2.png)