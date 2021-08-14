import { types } from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/firebase-confing'
import { finishLoading, startLoading } from "./ui"
import Swal from 'sweetalert2'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch( startLoading() )
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( ({ user }) => {
          
           dispatch(login( user.uid, user.displayName ))
           dispatch(finishLoading())
        })
        .catch( e => {
            Swal.fire('Error', e.message, 'error')
            console.log(e); 
            dispatch(finishLoading()) } )

    }
}

export const startRegisterNameEmailPassword = (name, email, password) => {
    return (dispatch) => {
        dispatch( startLoading() )
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async ({ user }) => {
           await user.updateProfile({ displayName:name })
           dispatch(login( user.uid, user.displayName ))
           dispatch(finishLoading())
        })
        .catch( e => { 
            Swal.fire('Error', e.message, 'error')
            console.log(e);  
            dispatch(finishLoading()) 
        
        } )
    }     
}

export const startGoogleLogin = () => {
     return (dispatch) => {
         firebase.auth().signInWithPopup( googleAuthProvider )
         .then( ({ user }) => {
             dispatch(login( user.uid, user.displayName ))
         })
     }
}

export const login = (uid, displayName) => (
 {
        type: types.login,
        payload: {
            uid,
            displayName,
        }
    })


    export const startLogout = () => {
        return async (dispatch) => {
           await firebase.auth().signOut()
           dispatch( logout() )
        }
        
        
    }


    export const logout = () => (
        {
               type: types.logout
               
           })