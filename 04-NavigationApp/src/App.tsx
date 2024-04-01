import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './presentation/routes/StackNavigator';
import {SideMenuNavigator} from './presentation/routes/SideMenuNavigator';

import 'react-native-gesture-handler';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
    </NavigationContainer>
  );
};
