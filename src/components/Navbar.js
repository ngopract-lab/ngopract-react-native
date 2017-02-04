import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Image
} from 'react-native';

import { styles } from '../routes/style';

export const Navbar = props => {
  console.log(props);
  return (
  <ScrollView style={styles.navbar} horizontal={true}>
    <TouchableHighlight
      style={styles.navbarTab}
      onPress={props.goToHome}
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
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  goToHome: PropTypes.func.isRequired,
  goToProfile: PropTypes.func.isRequired,
}
