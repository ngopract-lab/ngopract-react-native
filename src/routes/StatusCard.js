import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

import { styles } from '../style';

export const StatusCard = props => (
  <View style={styles.cardItem}>
    <View style={styles.cardPerson}>
      <Image
        source={{uri: 'https://www.wrnsstudio.com/system/people/83/grid_sm_grid_image.jpg'}}
        style={{width: 70, height: 70, borderRadius: 35}} />
      <View>
        <TouchableHighlight
          underlayColor='#FFF'
          onPress={props.goToProfile}>
          <Text style={styles.cardTitle}>{props.username}</Text>
        </TouchableHighlight>
        <Text style={styles.cardPosition}>SVP of Engineering</Text>
      </View>
    </View>
    <View style={styles.cardStatus}>
      <Text style={styles.cardStatusText}>
        {props.statusMessage}
      </Text>
    </View>
  </View>
);

StatusCard.propTypes = {
  goToProfile: PropTypes.func.isRequired,
};
