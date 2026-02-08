import { List } from "../../components"
import characters from '../../../../jsons/characters.json'

export const Characters = () => {
  
    return (
            <section className="text-center">
                <h2>Characters</h2>
                <List data={characters}/>
            </section>
        )
}