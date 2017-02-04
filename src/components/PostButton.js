import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';

import { styles } from '../style';

export const PostButton = () => (
  <TouchableHighlight style={styles.postButton}>
    <Text style={styles.postButtonText}>+</Text>
  </TouchableHighlight>
);
