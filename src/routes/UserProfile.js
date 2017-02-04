import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Image
} from 'react-native';

import { styles } from './style';

export const UserProfile = () => (
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
);
