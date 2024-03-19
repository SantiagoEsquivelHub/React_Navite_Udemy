import { Pressable, Text } from 'react-native'
import { styles, colors } from '../../config/app-theme';

interface Props {
    label: string;
    color?: string;
    doubleSize?: boolean;
    blackText?: boolean;
    onPress: () => void;
}

export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    doubleSize = false,
    blackText = false,
    onPress,
}: Props) => {

    return (
        <Pressable
            onPress={() => onPress()}
            style={({ pressed }) => ({
                ...styles.button,
                backgroundColor: color,
                opacity: pressed ? 0.5 : 1,
                width: doubleSize ? 180 : 80,
            })}>
            <Text
                style={{
                    ...styles.buttonText,
                    color: blackText ? 'black' : 'white',
                    textAlign: doubleSize ? 'left' : 'center',
                    marginLeft: doubleSize ? 20 : 0,
                }}>{label}</Text>
        </Pressable>
    )
}
