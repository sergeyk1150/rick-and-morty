import { useParams } from "react-router"
import { useCharacter } from "@/entities"


export const CharacterPage = () => {
    const {id} = useParams()
    const { loading, details: character } = useCharacter(id)
    return (
        <>
            {loading ? <>Loading...</> : <div className="card">
                <img src={character.image}></img>
                <p>Имя: {character.name}</p>
                <p>Статус: {character.status}</p>
                <p>Вид: {character.species}</p>
                <p>Пол: {character.gender}</p>
            </div>}
        </>
            
        )
}