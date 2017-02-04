import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Image
} from 'react-native';

import { styles } from './style';
import { StatusCard } from './StatusCard';
import { UserProfile } from './UserProfile';
import { Navbar } from '../components/Navbar';

export class MyScene extends Component {
  render() {
    return (
      <View style={styles.myScene}>
        <View style={styles.sceneTitle}>
          <TouchableHighlight
            onPress={this.props.onBack}
            style={styles.backButton}
            underlayColor='transparent'>
            { this.props.title !== 'HOME' ?
              <View style={styles.backButtonContainer}>
                <Image
                  source={require('../images/back.png')}
                  style={{width: 15, height: 15}}/>
                <Text style={styles.backButtonText}>
                  BACK
                </Text>
              </View> :
              <Text></Text> }

          </TouchableHighlight>
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

        <TouchableHighlight style={styles.postButton}>
          <Text style={styles.postButtonText}>+</Text>
        </TouchableHighlight>
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
