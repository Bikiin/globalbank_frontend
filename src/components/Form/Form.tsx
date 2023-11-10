import { useContext } from "react"

import { PostsContext } from "../../contexts/PostsContexts"

import { isValidInput, isValidName} from '../../helpers/FormHelpers'

import './Form.css'

export const Form = () => {
    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const { elements } = event.currentTarget
        
        const name = elements.namedItem('name') as HTMLInputElement
        const birth = elements.namedItem('birth') as HTMLInputElement
        const comments = elements.namedItem('comments') as HTMLTextAreaElement

        if(!isValidInput(name) || !isValidName(name.value) || !isValidInput(birth) || !isValidInput(comments)) return

       addPost({name: name.value, birth: birth.value, comments: comments.value})
       name.value = ''
       birth.value = ''
       comments.value = ''
    }

    const { addPost } = useContext(PostsContext)
    const validMaxDate = new Date().toISOString().split("T")[0]

    return(
        <form onSubmit={onSubmitHandler}>
            <label>
                Nombre completo
                <input type="text" name="name" />
            </label>
            <label>
                Fecha de nacimiento
                <input type="date" name="birth" min='1900-01-01' max={validMaxDate} />
            </label>
            <label>
                Comentarios
                <textarea name="comments" />
            </label>
            <button>Guardar</button>
        </form>
    )
}