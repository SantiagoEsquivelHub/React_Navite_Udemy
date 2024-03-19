import { StatusBar, View } from 'react-native'
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';
import { styles } from './config/app-theme';

export const App = () => {
  return (
    <View style={styles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#000'}
      />
      <CalculatorScreen />
    </View>
  )
}

export default App