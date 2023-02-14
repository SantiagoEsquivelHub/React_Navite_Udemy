import { useState } from "react";

export const useCounter = (initial: number = 20) => {

    const [counter, setCounter] = useState(initial)

    const accumulate = (value: number): void => {
        setCounter(counter + value)
    }

    const reset = (): void => {
        setCounter(initial)
    }

    return {
        //Properties
        counter,
        //Functions
        accumulate,
        reset,
    }
}
