import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View
} from 'react-native';

import colors from '../colors';

const styles = {
  indicator: {
    width: 4,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 2,
    position: 'absolute',
    alignSelf: 'center'
  },
  bubble: {
    backgroundColor: colors.primaryVar,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const range = Array(195).fill();
  for (let i = 0; i < range.length; i++) {
    range[i] = i - 22;
  }

  const renderMark = ({ item }) => {
    const showNumber = (item === 0 || (item - 8) % 10 === 0);
    const show = item >= 0 && item <= 150;
    return (
      <View style={{ height: 40, justifyContent: 'center' }}>
        <View style={{ height: 12 }}>
          {show && <View style={{ width: 2, height: showNumber ? 12 : 8, backgroundColor: colors.border }} />}
        </View>
      </View>
    )
  }

  const onScroll = (val) => {
    const displayNumber = Math.floor(val / 10);
    setCurrent(val ? displayNumber + 1 : 0);
  }

  const Seperator = () => (
    <View style={{ width: 8, height: 40 }} />
  )

  return (
    <View>
      <View style={styles.bubble}>
        <Text style={{ fontSize: 34, fontWeight: 'bold', color: colors.onBackground }}>{current}</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <FlatList
          keyExtractor={(data) => String(data)}
          renderItem={renderMark}
          data={range}
          horizontal
          ItemSeparatorComponent={() => <Seperator />}
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => onScroll(e.nativeEvent.contentOffset.x)}
        />
        <View style={styles.indicator} />
      </View>
    </View>
  );
};

export default Slider;
