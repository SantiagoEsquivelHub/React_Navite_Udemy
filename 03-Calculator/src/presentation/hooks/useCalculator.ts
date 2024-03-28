import { useEffect, useRef, useState } from 'react'

enum Operator {
    add = '+',
    subtract = '-',
    multiply = '*',
    divide = '÷',
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('');
    const [number, setNumber] = useState('0');
    const [previousNumber, setPreviousNumber] = useState('0');

    const lastOperator = useRef<Operator>();


    useEffect(() => {
        if (lastOperator.current) {
            const firstFormulaPart = formula.split(" ").at(0);
            setFormula(`${firstFormulaPart} ${lastOperator.current} ${number}`);

        } else {
            setFormula(number);
        }
    }, [number])

    useEffect(() => {
        const subresult = calculateSubResult();
        setPreviousNumber(`${subresult}`);
    }, [formula])

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
        setPreviousNumber('0');
        lastOperator.current = undefined;
        setFormula('');
    }

    const deleteOperation = () => {

        // Positive or negative single number
        if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
            return setNumber('0');
        }

        setNumber(number.slice(0, -1));
    }

    const toogleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }

        return setNumber('-' + number);
    }

    const setLastNumber = () => {

        calculateResult();

        if (number.endsWith('.')) {
            setPreviousNumber(number.slice(0, -1));
        } else {
            setPreviousNumber(number);
        }
        setNumber('0');
    }

    const addOperator = () => {
        setLastNumber();
        lastOperator.current = Operator.add;
    }

    const subtractOperator = () => {
        setLastNumber();
        lastOperator.current = Operator.subtract;
    }

    const multiplyOperator = () => {
        setLastNumber();
        lastOperator.current = Operator.multiply;
    }

    const divideOperator = () => {
        setLastNumber();
        lastOperator.current = Operator.divide;
    }

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`);
        lastOperator.current = undefined;
        setPreviousNumber('0');
    }

    const calculateSubResult = (): number => {

        const [firstValue, operation, secondValue] = formula.split(' ');

        const number1 = Number(firstValue);
        const number2 = Number(secondValue); // could be NaN

        if (isNaN(number2)) return number1;

        switch (operation) {
            case Operator.add:
                return number1 + number2;

            case Operator.subtract:
                return number1 - number2;

            case Operator.multiply:
                return number1 * number2;

            case Operator.divide:
                return number1 / number2;

            default:
                throw new Error('Operator not found');
        }
    }

    return {
        // Properties
        number,
        previousNumber,
        formula,

        // Methods
        buildNumber,
        cleanNumber,
        deleteOperation,
        toogleSign,
        addOperator,
        subtractOperator,
        multiplyOperator,
        divideOperator,
        calculateResult,
    }
}
