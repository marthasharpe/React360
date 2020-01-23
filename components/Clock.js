import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-360';

const Clock = () => {

  return (
    <View style={styles.panel2}>
      <View
        style={styles.clockBox}>
        <Text style={styles.clock}>
          Clock
        </Text>
      </View>
    </View>
  );
}

export default Clock;

const styles = StyleSheet.create({
  panel2: {
    // Fill the entire surface
    width: 300,
    height: 600,
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
        {translate: [1, 0, 0]}
      ]
  },
  clockBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  clock: {
    fontSize: 30,
  },
});