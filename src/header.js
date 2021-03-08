import React, { useState } from 'react';
import {
  View,
  Text
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from './colors';

const styles= {
  container: {
    paddingHorizontal: 20,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  processCount: {
    color: colors.onBackground,
    fontSize: 14,
    fontWeight: 'bold',
  },
  bar: {
    backgroundColor: colors.border,
    flex: 1,
    borderRadius: 4,
  },
  currentBar: (width) => ({
    position: 'absolute',
    height: 8,
    width,
    backgroundColor: colors.primary,
    borderRadius: 4,
    left: 0,
    elevation: 1,
  })
};

const Header = () => {
  const totalSteps = 8;
  const currentStep = 1;
  const [bar, setBar] = useState(0);

  return (
    <View style={styles.container}>
      <AntDesign name="arrowleft" size={24} color={colors.onBackground} />
      <View style={{ flex: 1, height: 8, marginHorizontal: 24 }}>
        <View style={styles.currentBar(bar * currentStep / totalSteps)} />
        <View style={styles.bar} onLayout={(e) => setBar(e.nativeEvent.layout.width)} />
      </View>
      <Text style={styles.processCount}>
        {currentStep}/{totalSteps}
      </Text>
    </View>
  )
};

export default Header;
