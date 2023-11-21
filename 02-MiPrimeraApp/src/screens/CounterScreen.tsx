import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  const onPress = (number: number) => {
    setCounter(counter + number);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          top: -15,
        }}>
        Counter: {counter}
      </Text>
      <Button onPress={() => onPress(1)} title="+1" />
      <Button onPress={() => onPress(-1)} title="-1" />
    </View>
  );
};
