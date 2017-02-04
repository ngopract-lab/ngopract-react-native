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
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { store } from './src/store';

export default class ngopractReactNative extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ngopractReactNative', () => ngopractReactNative);
