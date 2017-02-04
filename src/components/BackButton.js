import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';

import { styles } from '../routes/style';

export const BackButton = props => (
  <TouchableHighlight
    onPress={props.onBack}
    style={styles.backButton}
    underlayColor='transparent'>
    { props.title !== 'HOME' ?
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
);
