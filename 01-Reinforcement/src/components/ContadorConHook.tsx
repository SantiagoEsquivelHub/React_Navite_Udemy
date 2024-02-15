import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {
    const COUNTER = 10;
    const { counter, accumulate, reset } = useCounter()

    return (
        <>
            <h3>Contador con Hook: <small>{counter}</small></h3>

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
