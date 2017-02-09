import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Image
} from 'react-native';

import { connect } from 'react-redux';
import { styles } from '../style';

import StatusCard from './StatusCard';
import UserProfile from './UserProfile';
import { Navbar } from '../components/Navbar';
import { BackButton } from '../components/BackButton';
import { PostButton } from '../components/PostButton';

class MainScene extends Component {
  render() {
    const userStatusesData = this.props.userStatusesData; // state from Redux
    const loadSceneSection = routeTitle => {
      switch (routeTitle) {
        case 'HOME':
          return userStatusesData.map(userStatusObj =>
            <StatusCard key={userStatusObj._id} {...this.props} {...userStatusObj} />
          );
        case 'PROFILE':
          return <UserProfile />;
        default:
          return userStatusesData.map(userStatusObj =>
            <StatusCard key={userStatusObj._id} {...this.props} {...userStatusObj} />
          );
      }
    }
    return (
      <View style={styles.myScene}>
        <View style={styles.sceneTitle}>
          <BackButton {...this.props} />
          <Text style={styles.sceneTitleText}>
            {this.props.title}
          </Text>
        </View>
        <Navbar {...this.props} />
        <ScrollView style={styles.screenContainer}>
          { loadSceneSection(this.props.title) }
        </ScrollView>
        <PostButton />
      </View>
    );
  }
};

MainScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  goToHome: PropTypes.func.isRequired,
  goToProfile: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userStatusesData: state.userStatusesData,
});

export default connect(mapStateToProps)(MainScene);
