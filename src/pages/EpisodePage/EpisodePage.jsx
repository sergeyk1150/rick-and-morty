import { useParams } from "react-router"
import { useEpisode } from "@/entities/episodes/model/useEpisode"
export const EpisodePage = () => {
    const {id} = useParams()
    const {loading, details: episode} = useEpisode(id)
    return (
            <>
                {loading ?<>Loading...</>: <div className="card">
                    <p className="card__opt">Название: <span>{episode.name}</span></p>
                    <p className="card__opt">Эпизод: <span>{episode.episode}</span></p>
                    <p className="card__opt">Дата: <span>{episode.air_date}</span></p>
                </div>}
            </>
            
    )
}