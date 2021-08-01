import React from 'react'

export const LoginScreen = () => {
    return (
        <>
            <h3>Login</h3>
            <form>
                <input 
                    type="text"
                    placeholder="email@gamil.com"
                    name="email"
                />
                 <input 
                    type="password"
                    placeholder="Escribe tu password"
                    name="password"
                />
            </form>
        </>
    )
}
