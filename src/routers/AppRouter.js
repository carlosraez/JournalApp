import React, { useEffect } from 'react'
import { BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { firebase } from '../firebase/firebase-confing'
import { useDispatch } from 'react-redux'

import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { login } from '../actions/auth'


export const AppRouter = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) => {
            console.log(user);
            //esto significa que estoy authenticado pregunta si el objeto user ? tiene algo entonces dime el uid
            if( user?.uid ) {
                dispatch(login( user.uid, user.displayName ) )
            }
        })

    }, [dispatch])

    return (
        <Router>
                <Switch>
                         <Route 
                                path='/auth'
                                component={AuthRouter}
                            />
                            <Route 
                                exact path='/'
                                component={JournalScreen}
                            />
                         <Redirect to="/auth/login" />
                </Switch>
        </Router>
    )
}
