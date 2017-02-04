import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import MainScene from './routes/MainScene';

import { connector } from './store';

class App extends Component {
  render() {
    return (
      <Navigator
        style={styles.navigator}
        initialRoute={{ title: 'HOME', index: 0 }}
        renderScene={(route, navigator) =>
          <MainScene
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
            goToProfile={userId => {
              navigator.push({
                title: 'PROFILE',
                index: 1,
              });
              this.props.selectUserProfile(userId);
            }}
            goToHome={() => {
              if (route.index !== 0) {
                navigator.push({
                  title: 'HOME',
                  index: 0,
                })
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

App.propTypes = {
  selectUserProfile: PropTypes.func.isRequired,
}

export default connector(App);
