import {createStackNavigator} from '@react-navigation/stack';

import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {ProductsScreen} from '../screens/products/ProductsScreen';
import {ProductScreen} from '../screens/products/ProductScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {HomeScreen} from '../screens/home/HomeScreen';

const Stack = createStackNavigator<RootStackParam>();

export type RootStackParam = {
  Home: undefined;
  Products: undefined;
  Product: {id: number; name: string; price: number};
  Profile: undefined;
  Settings: undefined;
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0, // ios
          shadowColor: 'transparent', // ios
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
