import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config';
import {useCounterStore} from '../../store/counter-store';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
    
  const currentValue = useCounterStore(state => state.currentValue);
  const incrementBy = useCounterStore(state => state.incrementBy);

  const navigator = useNavigation();
  navigator.setOptions({
    title: `Counter: ${currentValue}`,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {currentValue}</Text>

      <Pressable style={styles.primaryButton} onPress={() => incrementBy(1)}>
        <Text>+1</Text>
      </Pressable>

      <Pressable style={styles.primaryButton} onPress={() => incrementBy(-1)}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};
