import React from 'react';
import {
  View,
  Text
} from 'react-native';

import colors from '../colors';

const styles = {
  button: {
    backgroundColor: colors.primary,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 20,
  }
}

const Button = ({ title }) => (
  <View style={styles.button}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default Button;
