import { Text, View } from 'react-native'
import { colors, styles } from '../../config/app-theme'
import { CalculatorButton } from '../components/CalculatorButton';

export const CalculatorScreen = () => {
    return (
        <View style={styles.calculatorContainer}>
            <View style={{ paddingHorizontal: 30, paddingBottom: 30 }}>
                <Text style={styles.mainResult}>1500</Text>
                <Text style={styles.subResult}>15</Text>
            </View>

            <View style={styles.row}>
                <CalculatorButton color={colors.lightGray} blackText={true} label="C" />
                <CalculatorButton color={colors.lightGray} blackText={true} label="+/-" />
                <CalculatorButton color={colors.lightGray} blackText={true} label="del" />
                <CalculatorButton color={colors.orange} blackText={true} label="/" />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="7" />
                <CalculatorButton label="8" />
                <CalculatorButton label="9" />
                <CalculatorButton label="x" />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="4" />
                <CalculatorButton label="5" />
                <CalculatorButton label="6" />
                <CalculatorButton label="-" />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="1" />
                <CalculatorButton label="2" />
                <CalculatorButton label="3" />
                <CalculatorButton label="+" />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="0" doubleSize={true} />
                <CalculatorButton label="." />
                <CalculatorButton label="=" />
            </View>

        </View>
    )
}
