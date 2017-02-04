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
          <Text style={styles.cardTitle}>Michael Cahyono</Text>
        </TouchableHighlight>
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
);

StatusCard.propTypes = {
  goToProfile: PropTypes.func.isRequired,
};
