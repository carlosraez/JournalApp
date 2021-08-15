import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { activeNote } from '../../actions/notes'
import { useForm } from '../../hoocks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {

    const dispatch = useDispatch()

    //aqui la renombto la variable a note
    const { active:note }  = useSelector(state => state.notes)
    const [ formValues, handleInputChange, reset  ]  = useForm( note )

    const { body, title } = formValues

    /*solo tengo que ejecutar la accion si el id es diferente, con useRef me permite 
    almacenar una variable mutable que no va a redibujar el componente si cambia
    */
    const activeId = useRef(note.id)

    useEffect(() => {
        
        //solo se dispare si la note id cambio, para evitar ciclo infinito
        if ( note.id !== activeId.current ) {
            reset( note )
            activeId.current = note.id
        }
        
    }, [note, reset])

    useEffect(() => {

       dispatch( activeNote( formValues.id, {...formValues }) )

    }, [formValues, dispatch])
    

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                        type="text"
                        placeholder="Some awesome title"
                        className="notes__title-input"
                        autoComplete="off"
                        onChange={handleInputChange}
                        value={ title }
                        name="title"
                        
                        />
                <textarea
                    placeholder="what happened today?"
                    className="notes__text-area"
                    onChange={handleInputChange}
                    name="body"
                    value={ body }
                >

                </textarea>
                {
                    (note.url)
                     && 
                    (   <div className="notes__image">
                            <img 
                                src="https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/aziz-acharki-549137-unsplash-1200x775.jpg"
                                alt="Arbol"
                            />
                        </div>
                   )
                }
            </div>
        </div>
    )
}
