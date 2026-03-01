import { useParams } from "react-router"
import { useEpisode } from "@/entities/episodes/model/useEpisode"
export const EpisodePage = () => {
    const {id} = useParams()
    const {loading, details: episode} = useEpisode(id)
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