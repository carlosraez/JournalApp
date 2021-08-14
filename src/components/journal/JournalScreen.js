import React from 'react'
import { useSelector } from 'react-redux'
import { NotesScreen } from '../notes/NotesScreen'
import { Sidebar } from './Sidebar'
import { NothingSelected } from './NothingSelected' 

export const JournalScreen = () => {

     const { active } = useSelector(state => state.notes)

    return (
        <div className="journal__main-content">
            <Sidebar />
            <main>
                {
                    (active !== null)
                         ? (  <NotesScreen /> ) 
                         : (  <NothingSelected /> )
                }
            </main>
        </div>
    )
}
