import React from 'react'
import { Switch,Route,  Redirect } from 'react-router'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegistrerScreen } from '../components/auth/RegistrerScreen'

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                 <Route 
                    exact
                    path='/auth/login'
                    component={ LoginScreen }
                 />
                  <Route 
                    exact
                    path='/auth/registrer'
                    component={ RegistrerScreen }
                 />
                 <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
}
