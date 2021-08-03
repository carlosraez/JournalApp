import React from 'react'
import { Link } from 'react-router-dom'

export const RegistrerScreen = () => {
    return (
        <>
            <h3 className="auth__title">Registrer</h3>
                <form>
                    <input 
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="auth__input"
                        autoComplete="off"
                    />
                    <input 
                        type="password"
                        placeholder="Write your password"
                        name="password"
                        className="auth__input"
                    />
                     <input 
                        type="password"
                        placeholder="Confirm your password"
                        name="confirm"
                        className="auth__input"
                    />
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"

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