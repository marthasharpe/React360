import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-360';

const Greeting = () => {

  return (
    <View style={styles.panel}>
      <View
        style={styles.greetingBox}>
        <Text style={styles.greeting}>
          Hello
        </Text>
      </View>
    </View>
  );
}

export default Greeting;

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 300,
    height: 600,
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});