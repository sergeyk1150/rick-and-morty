import { useParams } from "react-router"
import { useSearchDetails } from "../../../../../../hooks/useSearchDetails"

export const LocationDetails = () => {
    const {id} = useParams()
    const {loading, details: location} = useSearchDetails('location', id)

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