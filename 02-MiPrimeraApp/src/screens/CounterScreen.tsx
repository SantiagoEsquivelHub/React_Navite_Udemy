import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  const onPress = (number: number) => {
    setCounter(counter + number);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>

      <Fab title="-1" onPress={() => onPress(-1)} position='bl'/>

      <Fab title="+1" onPress={() => onPress(+1)} position='br'/>

      {/* <TouchableOpacity style={styles.fabLocationBL} onPress={() => onPress(-1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      {/* <TouchableOpacity style={styles.fabLocationBR} onPress={() => onPress(1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity> */}
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
});
