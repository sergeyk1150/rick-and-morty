import locations from '../../../../jsons/locations.json'
import { List } from "../../components"
export const Locations = () => {

    return (
            <section className="text-center">
                <h2>Locations</h2>
                <List data={locations}/>
            </section>
        )
}