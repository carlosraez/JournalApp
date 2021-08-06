import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hoocks/useForm'
import validator from 'validator';

export const RegistrerScreen = () => {

    const [ formValues, handleInputChange ] = useForm({

        name:'',
        email:'',
        password:'',
        password2:''
    })

    const { name ,email, password, password2 , } = formValues

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(name, email, password, password2);

        if( isFormValid ()) {
            console.log('Formulario correcto');
        } 
    }

    const isFormValid = () => {
        
        if(name.trim().length === 0) {
            console.log('Name is required');
            return false
        } else if ( !validator.isEmail(email) ) {
            console.log('Email is not valid');
            return false
         }  else if ( password !== password2 || password.length < 5 ) {
            console.log('Password should be at least 6 characters and match each other');
            return false
         } 
        
        return true
    }

    return (
        <>
            <h3 className="auth__title">Registrer</h3>
                <form>
                    <div className="auth__alert_error">
                        Hola Mundo
                    </div>
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