import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <>
                <h3 className="auth__title">Login</h3>
                <form>
                    <input 
                        type="text"
                        placeholder="email@gmail.com"
                        name="email"
                        className="auth__input"
                        autoComplete="off"
                    />
                    <input 
                        type="password"
                        placeholder="Escribe tu password"
                        name="password"
                        className="auth__input"
                    />
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"

                    >
                        Login
                    </button>
                    <hr />
                    <div className="auth__social_networks">
                        <p>Login With Social Networks</p>
                    </div>
                    <div className="google-btn">
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
