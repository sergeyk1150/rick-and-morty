import { useParams } from "react-router"
import { useLocation } from "@/entities"

export const LocationPage = () => {
    const {id} = useParams()
    const {loading, details: location} = useLocation(id)

    return (
        <>
            {loading ? <>Loading</> : <div className="card">
                <p>Название: {location.name}</p>
                <p>Тип: {location.type}</p>
                <p>Измерение: {location.dimension}</p>
            </div>}
        </>
            
    )
}