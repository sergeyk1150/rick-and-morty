import { useParams } from "react-router"
import { useCharacter } from "@/entities"


export const CharacterPage = () => {
    const {id} = useParams()
    const { loading, details: character } = useCharacter(id)
    return (
        <>
            {loading ? <>Loading...</> : <div className="card">
                <img src={character.image}></img>
                <p className="card__opt">Имя: <span>{character.name}</span></p>
                <p className="card__opt">Статус: <span>{character.status}</span></p>
                <p className="card__opt">Вид: <span>{character.species}</span></p>
                <p className="card__opt">Пол: <span>{character.gender}</span></p>
            </div>}
        </>
            
        )
}