import {Text, View} from 'react-native';
import {colors, styles} from '../../config/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    previousNumber,
    formula,
    buildNumber,
    cleanNumber,
    toogleSign,
    deleteOperation,
    addOperator,
    subtractOperator,
    multiplyOperator,
    divideOperator,
    calculateResult,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 30}}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {formula}
        </Text>

        {formula === previousNumber ? (
          <Text style={styles.subResult}> </Text>
        ) : (
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
            {previousNumber === '0' ? ' ' : previousNumber}
          </Text>
        )}
        
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={cleanNumber}
          label="C"
          color={colors.lightGray}
          blackText={true}
        />
        <CalculatorButton
          onPress={toogleSign}
          label="+/-"
          color={colors.lightGray}
          blackText={true}
        />
        <CalculatorButton
          onPress={deleteOperation}
          label="del"
          color={colors.lightGray}
          blackText={true}
        />
        <CalculatorButton
          onPress={divideOperator}
          label="/"
          color={colors.orange}
          blackText={true}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" />
        <CalculatorButton onPress={() => multiplyOperator()} label="x" />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" />
        <CalculatorButton onPress={() => buildNumber('6')} label="6" />
        <CalculatorButton onPress={() => subtractOperator()} label="-" />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" />
        <CalculatorButton onPress={() => addOperator()} label="+" />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          doubleSize={true}
        />
        <CalculatorButton onPress={() => buildNumber('.')} label="." />
        <CalculatorButton onPress={calculateResult} label="=" />
      </View>
    </View>
  );
};
