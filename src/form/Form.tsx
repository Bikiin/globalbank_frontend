import './Form.css'

export const Form = () => {
    return(
        <form>
            <label>
                Nombre completo
                <input type="text" name="Name" />
            </label>
            <label>
                Fecha de nacimiento
                <input type="date" name="birth" />
            </label>
            <label>
                Comentarios
                <textarea name="comments" />
            </label>
            <button>Guardar</button>
        </form>
    )
}