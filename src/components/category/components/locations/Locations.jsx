import { useState } from "react"
import { useSearchData } from "../../../../hooks/useSearchData"
import { useObserver } from "../../../../hooks/useObsuerver"
import { List } from "../../components/list/List"
import { URL_PARAMS } from "../../../../constants/url.params/url.params"
import { DEFAULTS } from "../../../../constants/defaults/defaults"
export const Locations = () => {
    const [pageNumber, setPageNumber] = useState(DEFAULTS.DEFAULT_PAGE)
    const {data, loading, lastPage} = useSearchData(URL_PARAMS.LOCATION, pageNumber)
    const {lastNodeRef} = useObserver(loading, lastPage, setPageNumber, pageNumber)
    return (
            <section className="text-center">
                <h2>Locations</h2>
                <List data={data} lastNodeRef={lastNodeRef} loading={loading}/>
            </section>
        )
}