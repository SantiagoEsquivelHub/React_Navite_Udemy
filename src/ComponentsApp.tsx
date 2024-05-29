import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/navigator/StackNavigator';
import 'react-native-gesture-handler';

export const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
