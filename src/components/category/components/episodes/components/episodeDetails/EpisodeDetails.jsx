import { useParams } from "react-router"
import { useSearchDetails } from "../../../../../../hooks/useSearchDetails"


export const EpisodeDetails = () => {
    const {id} = useParams()
    const {loading, details: episode} = useSearchDetails('episode', id)
    return (
            <>
                {loading ?<>Loading...</>: <div className="card">
                    <p>Название: {episode.name}</p>
                    <p>Эпизод: {episode.episode}</p>
                    <p>Дата: {episode.air_date}</p>
                </div>}
            </>
            
    )
}