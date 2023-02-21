import { useEffect, useRef, useState } from 'react';
import { User } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

    const {
        users,
        hayPaginaAnterior,
        paginaSiguiente,
        paginaAnterior
    } = useUsuarios()

    const renderUser = ({ avatar, first_name, last_name, email }: User) => {
        return (
            <tr key={email}>
                <td><img src={avatar} alt={first_name} /></td>
                <td>{first_name + ' ' + last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users
                            ? users.map(user => renderUser(user))
                            : ''
                    }
                </tbody>
            </table>
            <button
                className='btn btn-primary'
                onClick={paginaAnterior}
                disabled={!hayPaginaAnterior}
            >
                Anteriores
            </button>
            &nbsp;
            <button
                className='btn btn-primary'
                onClick={paginaSiguiente}
            >
                Siguientes
            </button>
        </>

    )
}
