import {NavigationContainer} from '@react-navigation/native';
import { StackNavigator } from './presentation/routes/StackNavigator';

import 'react-native-gesture-handler';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
