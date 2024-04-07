import {useEffect} from 'react';
import {View, Pressable, Text} from 'react-native';
import {globalColors, globalStyles} from '../../theme/theme';
import {
  type NavigationProp,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {type RootStackParam} from '../../routes/StackNavigator';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParam>>();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Pressable
  //         onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
  //         <IonIcon name="bullhorn" size={30} color={globalColors.primary} />
  //       </Pressable>
  //     ),
  //   });
  // }, []);

  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />
      <PrimaryButton
        label="Products"
        onPress={() => navigation.navigate('Products')}
      />
      <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
