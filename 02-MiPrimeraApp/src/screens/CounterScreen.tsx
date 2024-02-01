import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  const onPress = (number: number) => {
    setCounter(counter + number);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>

      <TouchableOpacity style={styles.fabLocationBL} onPress={() => onPress(-1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fabLocationBR} onPress={() => onPress(1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
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
  fabLocationBR: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
