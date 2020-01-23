import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-360';

const Decrement = () => {

  return (
    <View style={styles.panel2}>
      <View
        style={styles.decBox}>
        <Text style={styles.dec}>
          -1
        </Text>
      </View>
    </View>
  );
}

export default Decrement;

const styles = StyleSheet.create({
  panel2: {
    // Fill the entire surface
    width: 300,
    height: 600,
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  decBox: {
    padding: 20,
    // backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  dec: {
    fontSize: 60,
  },
});