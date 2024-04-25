import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { HomeScreen } from './presentation/screens/home/HomeScreen';

export const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>
          <HomeScreen></HomeScreen>
        </Text>
      </View>
    </NavigationContainer>
  );
};
