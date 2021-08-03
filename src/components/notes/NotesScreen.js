import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                        type="text"
                        placeholder="Some awesome title"
                        className="notes__title-input"
                        autoComplete="off"
                        />
                <textarea
                    placeholder="what happened today?"
                    className="notes__text-area"
                >

                </textarea>
                <div className="notes__image">
                    <img 
                        src="https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/aziz-acharki-549137-unsplash-1200x775.jpg"
                        alt="Arbol"
                    />
                </div>
            </div>
        </div>
    )
}
