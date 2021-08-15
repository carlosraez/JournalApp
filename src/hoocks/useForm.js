import { useState } from 'react'

export const useForm = ( initialState = {} ) => {
    const [formValues, setFormValues] = useState(initialState)

    //si el newFormState no es enviado = initialState
    const reset = ( newFormState = initialState ) => {
        setFormValues(newFormState)
    }

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [ target.name ]: target.value,  


        })
    }

    return [ formValues, handleInputChange, reset ]
}