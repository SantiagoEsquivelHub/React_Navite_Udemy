import React, { useState } from 'react'

export const Contador = () => {

    const COUNTER = 10;
    const [counter, setCounter] = useState(COUNTER)

    const accumulate = (value: number): void => {
        setCounter(counter + value)
    }

    const reset = (): void => {
        setCounter(COUNTER)
    }

    return (
        <>
            <h3>Contador: <small>{counter}</small></h3>

            <button
                className='btn btn-primary'
                onClick={() => accumulate(1)}>
                +1
            </button>
            &nbsp;
            <button
                className='btn btn-primary'
                onClick={() => accumulate(-1)}>
                -1
            </button>
            &nbsp;
            <button
                className='btn btn-danger'
                onClick={reset}>
                Reset
            </button>
        </>
    )
}
