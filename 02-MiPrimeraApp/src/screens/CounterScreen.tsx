import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  const onPress = (number: number) => {
    setCounter(counter + number);
  };

  return (
    <View
      style={styles.container}>
      <Text
        style={styles.title}>
        Counter: {counter}
      </Text>

      {/* Do not use Button */}
      {/* <Button onPress={() => onPress(1)} title="+1" /> */}
      {/* <Button onPress={() => onPress(-1)} title="-1" /> */}

      <TouchableOpacity
        onPress={() => onPress(1)}
      >
        <View style={styles.increaseButton}>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
  increaseButton: {
    backgroundColor: 'red',
    borderRadius: 100
  }
})