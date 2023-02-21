import React, { HtmlHTMLAttributes } from 'react'
import { useState } from 'react';

export const Formularios = () => {

    const [formulario, setFormulario] = useState({
        email: 'santi@gmail.com',
        password: 'sss'
    })

    const onChange = ({ target }: any) => {
        setFormulario({
            ...formulario,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h3>Formularios</h3>

            <input
                className='form-control'
                placeholder='Email'
                type="text"
                name="email"
                id="email"
                value={formulario.email}
                onChange={onChange}
            />

            <input
                className='form-control'
                placeholder='Password'
                type="text"
                name="password"
                id="password"
                value={formulario.password}
                onChange={onChange}

            />
            &nbsp;
            <pre>
                <code>{JSON.stringify(formulario, null, 2)}</code>
            </pre>
        </>
    )
}
