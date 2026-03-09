import { useParams } from "react-router"
import { useLocation } from "@/entities"

export const LocationPage = () => {
    const {id} = useParams()
    const {loading, details: location} = useLocation(id)

    return (
        <>
            {loading ? <>Loading</> : <div className="card">
                <p className="card__opt">Название: <span>{location.name}</span></p>
                <p className="card__opt">Тип: <span>{location.type}</span></p>
                <p className="card__opt">Измерение: <span>{location.dimension}</span></p>
            </div>}
        </>
            
    )
}