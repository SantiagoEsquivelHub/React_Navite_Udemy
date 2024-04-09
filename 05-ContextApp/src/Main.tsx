import { Text } from 'react-native'
import { BottomTabNavigator } from './presentation/navigators/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

export const Main = () => {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    )
}
