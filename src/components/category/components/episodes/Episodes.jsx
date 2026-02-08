import episodes from '../../../../jsons/episodes.json'
import { List } from "../../components"
export const Episodes = () => {
    
    return (
            <section className="text-center">
                <h2>Episodes</h2>
                <List data={episodes}/>
            </section>
        )
}