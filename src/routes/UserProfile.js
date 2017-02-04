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

const UserProfile = props => (
  <View style={styles.cardItem}>
    <View style={styles.cardPersonProfile}>
      <Image
        source={{uri: 'https://www.wrnsstudio.com/system/people/83/grid_sm_grid_image.jpg'}}
        style={{width: 120, height: 120, borderRadius: 15}} />
      <View>
        <Text style={styles.cardProfileTitle}>{props.UserProfileData.username}</Text>
        <Text style={styles.cardProfilePosition}>{props.UserProfileData.userPos}</Text>
      </View>
    </View>
    <View style={styles.cardStatus}>
      <Text style={styles.cardStatusText}>
        {props.UserProfileData.userDescription}
      </Text>
    </View>
  </View>
);

export default connector(UserProfile);
