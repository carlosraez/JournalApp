import { db } from "../firebase/firebase-confing"
import { types } from "../types/types"

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