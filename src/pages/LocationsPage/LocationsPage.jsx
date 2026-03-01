import { useLocations } from "../../entities"
import { useState } from "react"
import { DEFAULTS } from "../../shared"
import { List, useObserver } from "../../shared"

export const LocationsPage = () => {
    const [pageNumber, setPageNumber] = useState(DEFAULTS.DEFAULT_PAGE)
    const {data, loading, lastPage} = useLocations(pageNumber)
    const {lastNodeRef} = useObserver(loading, lastPage, setPageNumber, pageNumber)
    
    return (
        <section className="text-center">
            <h2>Locations</h2>
            <List data={data} lastNodeRef={lastNodeRef} loading={loading}/>        
        </section>
    )
}