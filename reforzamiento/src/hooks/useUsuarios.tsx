import { useState, useRef, useEffect } from 'react';
import { User, ReqResListado } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';

export const useUsuarios = () => {
    const [users, setUsers] = useState<User[]>([])
    const [hayPaginaAnterior, setHayPaginaAnterior] = useState<boolean>(false)
    const pageRef = useRef(1)

    useEffect(() => {

        cargarUsuarios()
        checkPaginaAnterior()
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
        } else {
            pageRef.current--
            alert("No hay más páginas a mostrar")
        }
    }

    const paginaSiguiente = async () => {
        pageRef.current++
        cargarUsuarios()
        setHayPaginaAnterior(true)
    }

    const checkPaginaAnterior = async () => {
        if (pageRef.current > 1) {
            setHayPaginaAnterior(true)
        }
        setHayPaginaAnterior(false)

    }

    const paginaAnterior = async () => {
        if (pageRef.current > 1) {
            pageRef.current--
            cargarUsuarios()
            setHayPaginaAnterior(true)
        }
        setHayPaginaAnterior(false)

    }

    return {
        //Properties
        users,
        hayPaginaAnterior,
        //Functions
        paginaSiguiente,
        paginaAnterior

    }
}
