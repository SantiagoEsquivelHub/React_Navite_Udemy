import { useForm } from '../hooks/useForm';

const initialForm = {
    email: "santi@gmail.com",
    password: "santi123"
}

export const Formularios = () => {

    const { email, password, onChange, formulario } = useForm(initialForm)

    return (
        <>
            <h3>Formularios</h3>

            <input
                className='form-control'
                placeholder='Email'
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={onChange}
            />

            <input
                className='form-control'
                placeholder='Password'
                type="text"
                name="password"
                id="password"
                value={password}
                onChange={onChange}

            />
            &nbsp;
            <pre>
                <code>{JSON.stringify(formulario, null, 2)}</code>
            </pre>
        </>
    )
}
