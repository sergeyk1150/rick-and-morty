import { useCharacters } from "../../entities"
import { useState } from "react"
import { DEFAULTS } from "../../shared"
import { List, useObserver } from "../../shared"

export const CharactersPage = () => {
    const [pageNumber, setPageNumber] = useState(DEFAULTS.DEFAULT_PAGE)
    const {data, loading, lastPage} = useCharacters(pageNumber)
    const {lastNodeRef} = useObserver(loading, lastPage, setPageNumber, pageNumber)
    
    return (
        <section className="text-center">
            <h2>Characters</h2>
            <List data={data} lastNodeRef={lastNodeRef} loading={loading}/>    
        </section>
    )
}