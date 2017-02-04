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

        { this.props.title === 'HOME' ?
          <ScrollView style={styles.screenContainer}>
            <StatusCard goToProfile={this.props.goToProfile}/>
          </ScrollView>
        : <Text></Text> }

        { this.props.title === 'PROFILE' ?
          <ScrollView style={styles.screenContainer}>
            <View style={styles.cardItem}>
              <View style={styles.cardPersonProfile}>
                <Image
                  source={{uri: 'https://www.wrnsstudio.com/system/people/83/grid_sm_grid_image.jpg'}}
                  style={{width: 120, height: 120, borderRadius: 15}} />
                <View>
                  <Text style={styles.cardProfileTitle}>Michael Cahyono</Text>
                  <Text style={styles.cardProfilePosition}>SVP of Engineering</Text>
                </View>
              </View>
              <View style={styles.cardStatus}>
                <Text style={styles.cardStatusText}>
                  My name is Michael Cahyono, and I love programming and design.
                </Text>
              </View>
            </View>

          </ScrollView>
        : <Text></Text> }

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
