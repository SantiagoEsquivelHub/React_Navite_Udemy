import {Text, View} from 'react-native';
import {styles} from '../../../config';
import {useProfileStore} from '../../store/profile-store';
import {useCounterStore} from '../../store/counter-store';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const currentValue = useCounterStore(state => state.currentValue);

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Text style={styles.title}>Counter: {currentValue}</Text>
    </View>
  );
};
