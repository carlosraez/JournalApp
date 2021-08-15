import { db } from "../firebase/firebase-confing"
import { types } from "../types/types"
import { loadNotes } from '../helpers/loadNotes'

export const startNewNotes = () => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid
        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime()
        }

       const doc = await db.collection(`${uid}/journal/notes`).add( newNote )
       console.log(doc);
       dispatch( activeNote(doc.id, newNote))
       
    } 
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = ( uid ) => {
    return async ( dispatch ) => {
        const notes = await loadNotes( uid )
        dispatch(setNotes(notes))
    }
}

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
})

export const startSaveNote = ( note ) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid

        //para la url no vaya undefined
        if (!note.url) {
            delete note.url
        }

        const noteToFirestore = { ...note }
        delete noteToFirestore.id //de esta manera elimino la propiedad id

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore )
    }
}