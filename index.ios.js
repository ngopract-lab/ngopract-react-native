/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import { MyScene } from './src/MyScene';

export default class ngopractReactNative extends Component {
  render() {
    return (
      <Navigator
        style={styles.navigator}
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}
            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection:'column',
    alignSelf: 'stretch',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ngopractReactNative', () => ngopractReactNative);
