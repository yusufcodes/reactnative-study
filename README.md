# Overview

This is a document to help me learn React Native, including setup, tooling etc. Started: 12/1/20

## React Native CLI

### Creating a new project

```
npx react-native init ProjectNameHere
```

### Running a React Native Application - Android
1. Start Metro

**Metro**: "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."

(Can use Yarn as well)
```
npx react-native start
```
Keep Metro running in a separate terminal.

2. Start the application
```
npx react-native run-android
```

3. Modifying the app
- Edit anything in App.js
- Reload: Press R twice, or select Reload from Developer Menu (Command M)

# Getting started with React Native - Notes
This section follows the [official documentation](https://reactnative.dev/docs/getting-started) of React Native to learn the basics.

## Core Components and Native Components

### Views

View: Basic building block of UI e.g Image, Text - all make up the application overall.

![React Native Views](https://reactnative.dev/docs/assets/diagram_ios-android-views.svg)

### Native Components

- Instead of writing separate views in Java/Kotlin for Android and Swift in iOS, we use JavaScript using React components. Corresponding iOS / Android views are made during **runtime**.
- React Native components work as they would on a normal Android / iOS device, therefore they're called **Native Components**
- Core Components: Essential Native Components that are ready to use and provided by React Native.

**Links:**
- [Native Components by the community](https://reactnative.directory/)

### Core Components

Core Components: [Documentation link](https://reactnative.dev/docs/components-and-apis)

Below is an example of **Core Components** which are used frequently.

![Core Components Grid](./images/corecomponents.png)

React Native components have the **same API structure as React components** - this is shown as an image below. 

![General Components](https://reactnative.dev/docs/assets/diagram_react-native-components.svg)

### React Fundamentals - quick refresher

React Native runs on React, so basic knowledge of React is helpful when working with RN.

- Components
- JSX
- Props
- State: "Use props to configure a component when it renders. Use state to keep track of any component data that you expect to change over time."

[JavaScript Imports / Exports](https://medium.com/dailyjs/javascript-module-cheatsheet-7bd474f1d829)

### Handling Text Input

- **TextInput**: Core Component for entering text
- onChangeText: Prop that takes a function to call whenever text changes
- onSubmitEditing: Function to call when text is submitted

**Example of using Text Input:**
```js
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>
  );
}

export default PizzaTranslator;
```

### Handling Touches

- RN has componets to handle lots of gesture
- Button: Basic button component which renders relative to the OS you are on
- Touchables: Component to customise the gestures recognised by the button.
- Docs mention [Pressable](https://reactnative.dev/docs/pressable) as newer

### Using a ScrollView
13/1/21: Got up to [Using a ScrollView](https://reactnative.dev/docs/using-a-scrollview)

- **ScrollView**: A scrolling container that can contain **multiple components and views**. 
- **pagingEnabled**: A prop which, when configured, allows for paging through different uses through swiping.
- Using ScrollViews: Best for a small number of things of a limited size - **all elements and views in ScrollView are rendered, even if not on the screen.** (FlatList should be used if you have a long list to display)

**Example ScrollView**
```js
import React from 'react';
import { Image, ScrollView, Text } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

export default App = () => (
  <ScrollView>
    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
    <Image source={logo} />
    { /* More elements here...*/ }
    <Text style={{ fontSize: 80 }}>React Native</Text>
  </ScrollView>
);

```

### Using List Views

There's two main components used for outputting lists: FlatList or SectionList.

**FlatList:** A scrolling list of **changing, but similarly structured data.** This is good for long lists of data, and **only renders elements that are currently on the screen**.

Props: data (items to be displayed), renderItem

**Example**

renderItem: This is the function containing the output we want for each item in **data**
```js
<FlatList
  data={[
    {key: 'Devin'},
    {key: 'Dan'},
    {key: 'Dominic'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
  ]}
  renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
  />
```

### Troubleshooting

No notes taken but reference here: [Troubleshooting in React Native](https://reactnative.dev/docs/troubleshooting)

### Platform Specific Code

No notes taken, but this part of the docs goes over writing code specific to Android or iOS if needed: [Platform Specific Code in React Native](https://reactnative.dev/docs/platform-specific-code)

## React Native with Expo

To Do: Learn how Expo handles things for the developer compared to R.N development without Expo