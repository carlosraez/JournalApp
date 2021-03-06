import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hoocks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator';
import { setError, removeError } from '../../actions/ui'
import { startRegisterNameEmailPassword } from '../../actions/auth'

export const RegistrerScreen = () => {

    const dispatch = useDispatch()
    const { msgError } = useSelector( state => state.ui )
    const { loading } = useSelector(state => state.ui)
    
    const [ formValues, handleInputChange ] = useForm({

        name:'',
        email:'',
        password:'',
        password2:''
    })

    const { name ,email, password, password2 , } = formValues

    const handleRegister = (e) => {
        e.preventDefault()
    
        if( isFormValid ()) {
            dispatch( startRegisterNameEmailPassword(name, email, password)  )
        } 
    }

    const isFormValid = () => {
        
        if(name.trim().length === 0) {
            dispatch( setError('Name is required') )
            
            return false
        } else if ( !validator.isEmail(email) ) {
            dispatch( setError('Email is not valid') )
      
            return false
         }  else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError('Password should be at least 6 characters and match each other') )
           
            return false
         } 
        
        dispatch( removeError() )
        return true
    }

    return (
        <>
            <h3 className="auth__title">Registrer</h3>
                <form>
                    {
                        msgError && 
                       ( <div className="auth__alert_error">
                        {msgError}
                       </div> )
                    }
                    
                    <input 
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="auth__input"
                        autoComplete="off"
                        onChange={handleInputChange}
                    />
                    <input 
                        type="email"
                        placeholder="name@gmail.com"
                        name="email"
                        className="auth__input"
                        onChange={handleInputChange}
                    />
                    <input 
                        type="password"
                        placeholder="Write your password"
                        name="password"
                        className="auth__input"
                        onChange={handleInputChange}
                    />
                     <input 
                        type="password"
                        placeholder="Confirm your password"
                        name="password2"
                        className="auth__input"
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        onClick={ handleRegister }
                        disabled=??{ loading }
                    >
                        Registrer
                    </button>
                    <hr />
                </form>
            <div className="auth__change-screen-login">
                <Link className="link" to="/auth/login" >Alredy Registrer ?</Link>
          </div>
    </>
    )
}