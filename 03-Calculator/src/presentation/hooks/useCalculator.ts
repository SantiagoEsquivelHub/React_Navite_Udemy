import { useState } from 'react'

export const useCalculator = ({ }) => {
    const [number, setNumber] = useState('0');

    const buildNumber = (newNumber: string) => {

        // Avoid double point
        if (number.includes('.') && newNumber === '.') return;

        // Decimal point
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (newNumber === '.') {
                return setNumber(number + newNumber);
            }

            // Evaluate if the number is another 0 and there is no point
            if (newNumber === '0' && number.includes('.')) {
                return setNumber(number + newNumber);
            };

            // Evaluate if the number is not 0, there is not point and its the fisrt number
            if (newNumber !== '0' && !number.includes('.')) {
                return setNumber(newNumber);
            };

            // Avoid 0000.000
            if (!number.includes('.') && newNumber === '0') return;

            return setNumber(number + newNumber);
        }

        setNumber(number + newNumber);

    }

    const cleanNumber = () => {
        setNumber('0');
    }

    return {
        // Properties
        number,

        // Methods
        buildNumber,
        cleanNumber
    }
}
