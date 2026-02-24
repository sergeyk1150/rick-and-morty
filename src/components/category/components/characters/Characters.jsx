import { List } from "../../components/list/List"
import { useSearchData } from "../../../../hooks/useSearchData"
import { useState,  } from "react"
import { useObserver } from "../../../../hooks/useObsuerver"
import { URL_PARAMS } from "../../../../constants/url.params/url.params"
import { DEFAULTS } from "../../../../constants/defaults/defaults"

export const Characters = () => {
    const [pageNumber, setPageNumber] = useState(DEFAULTS.DEFAULT_PAGE)
    const {data, loading, lastPage} = useSearchData(URL_PARAMS.CHARACTER, pageNumber)
    const {lastNodeRef} = useObserver(loading, lastPage, setPageNumber, pageNumber)

    return (
            <section className="text-center">
                <h2>Characters</h2>
                <List data={data} lastNodeRef={lastNodeRef} loading={loading}/>
            </section>
        )
}