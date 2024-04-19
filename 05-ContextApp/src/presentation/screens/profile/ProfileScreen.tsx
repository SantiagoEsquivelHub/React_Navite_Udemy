import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config';
import {useProfileStore} from '../../store/profile-store';

export const ProfileScreen = () => {
  // const {name, email, changeProfile} = useProfileStore(); // innecesary reloads

  const name = useProfileStore((state) => state.name);
  const email = useProfileStore((state) => state.email);
  const changeProfile = useProfileStore((state) => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable style={styles.primaryButton} onPress={() => changeProfile("Santi Sánchez", "santi@gmail.com")}>
        <Text>Change name</Text>
      </Pressable>
    </View>
  );
};
