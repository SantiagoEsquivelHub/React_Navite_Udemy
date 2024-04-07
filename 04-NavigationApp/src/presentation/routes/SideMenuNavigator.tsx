import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {globalColors} from '../theme/theme';
import {View, useWindowDimensions} from 'react-native';
import {BottomTabsNavigator} from './BottomTabsNavigator';
import {IonIcon} from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width <= 758 ? 'slide' : 'permanent',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="cogs" size={30} color={color} />
          ),
        }}
        name="Tabs"
        component={BottomTabsNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="github" size={30} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          backgroundColor: globalColors.primary,
          height: 200,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
