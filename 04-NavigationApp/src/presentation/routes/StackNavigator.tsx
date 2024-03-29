import {createStackNavigator} from '@react-navigation/stack';

import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { HomeScreen } from '../screens/home/HomeScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
