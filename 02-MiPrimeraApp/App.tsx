import React from 'react';
import { HelloWorldScreen } from './src/screens/HelloWorldScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};
