import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../colors';

const styles = {
  indicator: {
    width: 4,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 2,
    position: 'absolute',
    alignSelf: 'center',
    top: 10
  },
  bubble: {
    backgroundColor: colors.primaryVar,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    top: 10
  },
  gradient: (rotateDeg) => ({
    width: 40,
    height: 40,
    transform: [
      { rotateZ: `${rotateDeg}deg` }
    ],
    position: 'absolute',
    top: 130,
    elevation: 1,
  })
}

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const range = Array(118).fill();
  for (let i = 0; i < range.length; i++) {
    range[i] = i - 9;
  }

  const renderMark = ({ item }) => {
    const showNumber = (item === 0 || (item - 8) % 10 === 0);
    const show = item >= 0 && item <= 100;
    return (
      <View style={{ width: 20, height: 60, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: 12 }}>
          {show && <View style={{ width: 2, height: showNumber ? 12 : 8, backgroundColor: colors.border }} />}
        </View>
        {show && <View style={{ width: 20, height: 2, backgroundColor: colors.border }} />}
        {show && showNumber && <Text style={{ position: 'absolute', top: 40 }}>{item}</Text>}
      </View>
    )
  }

  const onScroll = (val) => {
    const displayNumber = Math.floor(val / 20);
    setCurrent(val ? displayNumber : 0);
  }

  return (
    <View>
      <LinearGradient
        colors={['rgb(255, 255, 255)', 'rgba(255, 255, 255, 0.6)', 'transparent']}
        style={styles.gradient(-90)}
      />
      <LinearGradient
        colors={['rgb(255, 255, 255)', 'rgba(255, 255, 255, 0.6)', 'transparent']}
        style={[styles.gradient(90), { right: 0,  }]}
      />
      <View style={styles.bubble}>
        <Text style={{ fontSize: 34, fontWeight: 'bold', color: colors.onBackground }}>{current}</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <FlatList
          keyExtractor={(data) => String(data)}
          renderItem={renderMark}
          data={range}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => onScroll(e.nativeEvent.contentOffset.x)}
        />
        <View style={styles.indicator} />
      </View>
    </View>
  );
};

export default Slider;
