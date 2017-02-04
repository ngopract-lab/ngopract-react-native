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

import App from './src/App';

export default class ngopractReactNative extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('ngopractReactNative', () => ngopractReactNative);
