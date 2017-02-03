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
          <Text style={styles.sceneTitleText}>Current Scene: {this.props.title}</Text>
        </View>
        <TouchableHighlight onPress={this.props.onForward} underlayColor='transparent'>
          <Text>Tap me to load the next scene ></Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onBack} underlayColor='transparent'>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>

        <ScrollView>

          <View style={styles.cardItem}>
            <View style={styles.cardPerson}>
              <Image
                source={{uri: 'https://www.wrnsstudio.com/system/people/83/grid_sm_grid_image.jpg'}}
                style={{width: 70, height: 70, borderRadius: 35}} />
              <View>
                <TouchableHighlight underlayColor='#FFF' onPress={this.props.onForward}>
                  <Text style={styles.cardTitle}>Michael Cahyono</Text>
                </TouchableHighlight>
                <Text style={styles.cardPosition}>SVP of Engineering</Text>
              </View>
            </View>
            <View style={styles.cardStatus}>
              <Text style={styles.cardStatusText}>
                This is a super magnificent status created using react native app!
                I'm so happy that my status can be used as a dummy in this awesome
                react native app. Have fun!
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
                This is a super magnificent status created using react native app!
                I'm so happy that my status can be used as a dummy in this awesome
                react native app. Have fun!
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
                This is a super magnificent status created using react native app!
                I'm so happy that my status can be used as a dummy in this awesome
                react native app. Have fun!
              </Text>
            </View>
          </View>

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
};
