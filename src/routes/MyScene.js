import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Image
} from 'react-native';

import { styles } from './style';

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
        <ScrollView style={styles.navbar} horizontal={true}>
          <TouchableHighlight
            style={styles.navbarTab}
            onPress={this.props.goToHome}
            underlayColor='transparent'>
            <Text style={styles.navbarTabText}>Home</Text>
          </TouchableHighlight>
          <View style={styles.navbarTab}>
            <Text style={styles.navbarTabText}>People</Text>
          </View>
          <View style={styles.navbarTab}>
            <Text style={styles.navbarTabText}>Messages</Text>
          </View>
          <View style={styles.navbarTab}>
            <Text style={styles.navbarTabText}>Profile</Text>
          </View>
        </ScrollView>

        { this.props.title === 'HOME' ?
          <ScrollView style={styles.screenContainer}>
            <View style={styles.cardItem}>
              <View style={styles.cardPerson}>
                <Image
                  source={{uri: 'https://www.wrnsstudio.com/system/people/83/grid_sm_grid_image.jpg'}}
                  style={{width: 70, height: 70, borderRadius: 35}} />
                <View>
                  <TouchableHighlight
                    underlayColor='#FFF'
                    onPress={this.props.goToProfile}>
                    <Text style={styles.cardTitle}>Michael Cahyono</Text>
                  </TouchableHighlight>
                  <Text style={styles.cardPosition}>SVP of Engineering</Text>
                </View>
              </View>
              <View style={styles.cardStatus}>
                <Text style={styles.cardStatusText}>
                  This is a super magnificent status created using react native app!
                  `I'm so happy that my status can be used as a dummy in this awesome
                  react native app. Have fun!`
                </Text>
              </View>
            </View>

            <View style={styles.cardItem}>
              <View style={styles.cardPerson}>
                <Image
                  source={{uri: 'https://www.wrnsstudio.com/system/people/83/grid_sm_grid_image.jpg'}}
                  style={{width: 70, height: 70, borderRadius: 35}} />
                <View>
                  <Text style={styles.cardTitle}>Michael Cahyono</Text>
                  <Text style={styles.cardPosition}>SVP of Engineering</Text>
                </View>
              </View>
              <View style={styles.cardStatus}>
                <Text style={styles.cardStatusText}>
                  `This is a super magnificent status created using react native app!
                  I'm so happy that my status can be used as a dummy in this awesome
                  react native app. Have fun!`
                </Text>
              </View>
            </View>

            <View style={styles.cardItem}>
              <View style={styles.cardPerson}>
                <Image
                  source={{uri: 'https://www.wrnsstudio.com/system/people/83/grid_sm_grid_image.jpg'}}
                  style={{width: 70, height: 70, borderRadius: 35}} />
                <View>
                  <Text style={styles.cardTitle}>Michael Cahyono</Text>
                  <Text style={styles.cardPosition}>SVP of Engineering</Text>
                </View>
              </View>
              <View style={styles.cardStatus}>
                <Text style={styles.cardStatusText}>
                  `This is a super magnificent status created using react native app!
                  I'm so happy that my status can be used as a dummy in this awesome
                  react native app. Have fun!`
                </Text>
              </View>
            </View>

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
};
