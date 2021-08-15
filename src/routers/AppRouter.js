import React, { useEffect, useState } from 'react'
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
import { startLoadingNotes } from '../actions/notes'


export const AppRouter = () => {

    const dispatch = useDispatch()
    const [cheking, setCheking] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged(async (user) => {
        
            //esto significa que estoy authenticado pregunta si el objeto user ? tiene algo entonces dime el uid
            if( user?.uid ) {
                dispatch(login( user.uid, user.displayName ) )
                setIsAuthenticated( true )
                dispatch( startLoadingNotes( user.uid ) )

            }
            else {
                setIsAuthenticated( false )
            }
        })

        setCheking(false)

    }, [dispatch, setCheking, setIsAuthenticated])

    if ( cheking ) {
        return (<h1>Wait...</h1>)
    }

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
