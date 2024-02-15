import { useState } from "react"

export const useForm = <T extends Object>(initialForm: T) => {

    const [state, setState] = useState(initialForm)

    const onChange = ({ target }: any) => {
        setState({
            ...state,
            [target.name]: target.value
        })
    }

    return {
        ...state,
        formulario: state,
        onChange
    }

}
