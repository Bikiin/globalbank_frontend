import { Post } from '../../contexts/PostsContexts'

import { calculateAge, validFormatDate } from '../../helpers/CardHelpers'

import './Card.css'

export const Card = ({name, birth, comments}: Post) => {
    const date = validFormatDate(birth)
    const years = calculateAge(birth)
    return (
        <article>
            <h6>{name}</h6>
            <span>{date}, Edad: {years} años.</span>
            <p>Comentarios: {comments}</p>
        </article>
    )
}