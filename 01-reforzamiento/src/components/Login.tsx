import { useEffect, useReducer } from "react"

interface AuthState {
    loading: boolean,
    token: string | null,
    username: string,
    name: string
}

const initialState = {
    loading: true,
    token: null,
    username: "",
    name: ""
}

type LoginPayload =
    { username: string, name: string }

type AuthAction =
    | { type: "validate" }
    | { type: "login", payload: LoginPayload }
    | { type: "logout" }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {

        case "validate":
            return {
                loading: false,
                token: null,
                username: "",
                name: ""
            }
        case "login":
            const { username, name } = action.payload;

            return {
                loading: false,
                token: 'logged',
                username: username,
                name: name
            }
        case "logout":
            return {
                loading: false,
                token: null,
                username: "",
                name: ""
            }
        default:
            return state

    }
}

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: "validate" })
        }, 1500);
    }, [])

    const login = () => {
        dispatch({
            type: "login",
            payload: {
                username: "veterano",
                name: "Santaigo"
            }
        })
    }

    const logout = () => {
        dispatch({ type: "logout" })
    }

    if (state.loading) {
        return (
            <>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                state.token
                    ? <div className="alert alert-success">¡Autenticado {state.username} como {state.name}!</div>
                    : <div className="alert alert-danger">No autenticado</div>

            }

            {
                state.token
                    ? <button className="btn btn-danger" onClick={logout}>Logout </button>
                    : <button className="btn btn-primary" onClick={login}>Login</button>

            }


        </>
    )
}
