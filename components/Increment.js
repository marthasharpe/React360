import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-360';

const Increment = () => {

  return (
    <View style={styles.panel3}>
      <View
        style={styles.incBox}>
        <Text style={styles.inc}>
          +1
        </Text>
      </View>
    </View>
  );
}

export default Increment;

const styles = StyleSheet.create({
  panel3: {
    // Fill the entire surface
    width: 300,
    height: 600,
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  incBox: {
    padding: 20,
    // backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  inc: {
    fontSize: 60,
  },
});