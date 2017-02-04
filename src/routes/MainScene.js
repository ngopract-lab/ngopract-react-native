import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Image
} from 'react-native';

import { styles } from '../style';

import { connector } from '../store';

import { StatusCard } from './StatusCard';
import { UserProfile } from './UserProfile';
import { Navbar } from '../components/Navbar';
import { BackButton } from '../components/BackButton';
import { PostButton } from '../components/PostButton';

class MainScene extends Component {
  render() {
    const userStatusesData = this.props.userStatusesData; // state from Redux
    return (
      <View style={styles.myScene}>
        <View style={styles.sceneTitle}>
          <BackButton {...this.props} />
          <Text style={styles.sceneTitleText}>{this.props.title}</Text>
        </View>

        <Navbar {...this.props} />

        <ScrollView style={styles.screenContainer}>
          { this.props.title === 'HOME' ?
              userStatusesData.map(userStatusObj =>
                <StatusCard key={userStatusObj._id} {...this.props} {...userStatusObj} />
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

MainScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  goToHome: PropTypes.func.isRequired,
  goToProfile: PropTypes.func.isRequired,
};

export default connector(MainScene);
