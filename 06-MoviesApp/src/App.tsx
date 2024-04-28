import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {HomeScreen} from './presentation/screens/home/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <HomeScreen />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};
