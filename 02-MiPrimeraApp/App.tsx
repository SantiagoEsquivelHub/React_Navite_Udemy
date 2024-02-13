import React from 'react';
import { HelloWorldScreen } from './src/screens/HelloWorldScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';
import { DimensionsScreen } from './src/screens/DimensionsScreen';
import { PositionScreen } from './src/screens/PositionScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PositionScreen />
    </SafeAreaView>
  );
};
