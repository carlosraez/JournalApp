import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hoocks/useForm'
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth'



export const LoginScreen = () => {

    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.ui)
    
     
    const [ formValues, handleInputChange ] = useForm({
        email:'nando@gmail.com',
        password:'1234'
    })

    const { email, password } = formValues

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch( startLoginEmailPassword(email, password) )
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    return (
        <>
                <h3 className="auth__title">Login</h3>
                <form onSubmit={ handleLogin }>
                    <input 
                        type="text"
                        placeholder="email@gmail.com"
                        name="email"
                        className="auth__input"
                        autoComplete="off"
                        onChange={ handleInputChange }
                        value={ email }
                    />
                    <input 
                        type="password"
                        placeholder="Escribe tu password"
                        name="password"
                        className="auth__input"
                        onChange={ handleInputChange }
                        value={ password }
                    />
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled= { loading }
                    >
                        Login
                    </button>
                    <hr />
                    <div className="auth__social_networks">
                        <p>Login With Social Networks</p>
                    </div>
                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </form>
            <div className="auth__change-screen-login">
                <Link className="link" to="/auth/registrer" >Create New Account</Link>
          </div>
        </>
    )
}
