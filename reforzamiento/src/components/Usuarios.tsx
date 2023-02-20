import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, User } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [users, setUsers] = useState<User[]>([])
    const pageRef = useRef(1)

    useEffect(() => {

        cargarUsuarios()

    }, [])

    const cargarUsuarios = async () => {
        const resp = await reqResApi.get<ReqResListado>('users', {
            params: {
                page: pageRef.current
            }
        })
        console.log("pageRef: ", pageRef.current)
        console.log(resp.data.data)
        if (resp.data.data.length > 0) {
            setUsers(resp.data.data)
            pageRef.current++
        } else {
            alert("No hay más páginas a mostrar")
        }
    }
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
                onClick={cargarUsuarios}
            >Siguiente</button>
        </>

    )
}
