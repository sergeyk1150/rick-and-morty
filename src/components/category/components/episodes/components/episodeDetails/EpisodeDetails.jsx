import { useDataById } from "../../../../../../hooks"
import episodes from '../../../../../../jsons/episodes.json'

export const EpisodeDetails = () => {
    const episode = useDataById(episodes)
    if (!episode) {
        return (<div>Не найдено</div>)
    }
    return (
            <div className="card">
                <p>Название: {episode.name}</p>
                <p>Эпизод: {episode.episode}</p>
                <p>Дата: {episode.air_date}</p>
            </div>
    )
}