import React from 'react';
import {
  View,
  Text
} from 'react-native';

import colors from '../colors';
import Button from './button';
import Slider from './slider';

const styles = {
  container: {
    flex: 1
  },
  title: {
    color: colors.onBackground,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  }
};

const Body = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How old are you?</Text>
      <View style={{ flex: 5, justifyContent: 'center' }}>
        <Slider />
      </View>
      <View style={{ flex: 1, marginHorizontal: 50, marginBottom: 60, justifyContent: 'flex-end' }}>
        <Button title="Continue" />
      </View>
    </View>
  );
};

export default Body;
