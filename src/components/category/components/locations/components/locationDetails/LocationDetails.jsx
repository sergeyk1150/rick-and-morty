import { useDataById } from "../../../../../../hooks"
import locations from '../../../../../../jsons/locations.json'
export const LocationDetails = () => {
    const location = useDataById(locations)

    return (
            <div className="card">
                <p>Название: {location.name}</p>
                <p>Тип: {location.type}</p>
                <p>Измерение: {location.dimension}</p>
            </div>
    )
}