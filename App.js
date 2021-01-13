/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Button,
  Pressable,
} from 'react-native';

const HelloWorldApp = () => {
  return (
    <ScrollView>
      <Text>This is another demo app...</Text>
      <View>
        <Text>Some more interesting text 😀</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Press Me"
      />
      <Pressable
        onPress={() => {
          alert('Hi!');
        }}>
        <Text>I'm pressable!</Text>
      </Pressable>
    </ScrollView>
  );
};

export default HelloWorldApp;
