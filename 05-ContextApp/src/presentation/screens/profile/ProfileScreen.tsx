import { Text, View } from 'react-native'
import { styles } from '../../../config'
import { useProfileStore } from '../../store/profile-store';

export const ProfileScreen = () => {

  const { name, email } = useProfileStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
    </View>
  )
}
