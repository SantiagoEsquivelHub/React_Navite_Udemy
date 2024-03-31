import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10}}>SettingsScreen</Text>

      <PrimaryButton label="Go back" onPress={() => navigator.goBack()} />
      <PrimaryButton
        label="Go to home"
        onPress={() => navigator.dispatch(StackActions.popToTop)}
      />
    </View>
  );
};
