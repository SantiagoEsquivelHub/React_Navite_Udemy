import {Text, View} from 'react-native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

export const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>
      {myIcon}
    </View>
  );
};
