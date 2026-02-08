import { useDataById } from "../../../../../../hooks"
import locations from '../../../../../../jsons/locations.json'
export const LocationDetails = () => {
    const location = useDataById(locations)
    if (!location) {
        return (<div>Не найдено</div>)
    }

    return (
            <div className="card">
                <p>Название: {location.name}</p>
                <p>Тип: {location.type}</p>
                <p>Измерение: {location.dimension}</p>
            </div>
    )
}