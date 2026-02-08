import { useDataById } from "../../../../../../hooks"
import characters from '../../../../../../jsons/characters.json'

export const CharacterDetails = () => {
    const character = useDataById(characters)

    return (
            <div className="card">
                <img src={character.image}></img>
                <p>Имя: {character.name}</p>
                <p>Статус: {character.status}</p>
                <p>Вид: {character.species}</p>
                <p>Пол: {character.gender}</p>
            </div>
        )
}