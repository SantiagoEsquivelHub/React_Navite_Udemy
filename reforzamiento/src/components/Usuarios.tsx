import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, User } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {

        const resp =
            reqResApi.get<ReqResListado>('users')
                .then(({ data }) => {
                    console.log("data: ", data.data)
                    setUsers(data.data)
                })
                .catch(console.log)

    }, [])

    const renderUser = ({ avatar, first_name, last_name, email }: User) => {
        return (
            <tr>
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
            <button className='btn btn-primary'>Siguiente</button>
        </>

    )
}
