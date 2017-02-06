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
import { connect } from 'react-redux';

const StatusCard = props => (
  <View style={styles.cardItem}>
    <View style={styles.cardPerson}>
      <Image
        source={{uri: props.userPhoto}}
        style={{width: 60, height: 60, borderRadius: 30}} />
      <View>
        <TouchableHighlight
          underlayColor='#FFF'
          onPress={() => props.goToProfile(props._id) }>
          <Text style={styles.cardTitle}>{props.username}</Text>
        </TouchableHighlight>
        <Text style={styles.cardPosition}>{props.userPos} at {props.userCompany}</Text>
      </View>
    </View>
    <View style={styles.cardStatus}>
      { props.statusImage !== '' ?
        <Image source={{uri: props.statusImage}} style={styles.cardStatusImage} />
        :
        <Text></Text>
      }
      <Text style={styles.cardStatusText}>
        {props.statusMessage}
      </Text>
    </View>
  </View>
);

StatusCard.propTypes = {
  goToProfile: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  selectUserProfile: userId => dispatch(fetchUserProfile(userId)),
});

export default connect(mapDispatchToProps)(StatusCard);
