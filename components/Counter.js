import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-360';

const Counter = () => {

  return (
    <View style={styles.panel1}>
        <Text style={styles.greeting}>
            Welcome to Counter World!
        </Text>
        <Text style={styles.greeting}>
            Count: 0
        </Text>
    </View>
  );
}

export default Counter;

const styles = StyleSheet.create({
  panel1: {
    // Fill the entire surface
    width: 600,
    height: 600,
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 80,
    textAlign:'center',
  },
});