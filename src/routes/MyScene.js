import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Image
} from 'react-native';

import { styles } from '../style';

import { StatusCard } from './StatusCard';
import { UserProfile } from './UserProfile';
import { Navbar } from '../components/Navbar';
import { BackButton } from '../components/BackButton';
import { PostButton } from '../components/PostButton';

export class MyScene extends Component {
  render() {
    return (
      <View style={styles.myScene}>
        <View style={styles.sceneTitle}>
          <BackButton {...this.props} />
          <Text style={styles.sceneTitleText}>{this.props.title}</Text>
        </View>

        <Navbar {...this.props} />

        <ScrollView style={styles.screenContainer}>
          { this.props.title === 'HOME' ?
              [1, 2, 3, 4, 5].map(item =>
                <StatusCard key={item} {...this.props} />
              )
          : <Text></Text> }
          { this.props.title === 'PROFILE' ?
              <UserProfile />
          : <Text></Text> }
        </ScrollView>

        <PostButton />
      </View>
    )
  }
}

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  goToHome: PropTypes.func.isRequired,
  goToProfile: PropTypes.func.isRequired,
};
