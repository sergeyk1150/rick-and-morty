import { Link, useLocation } from "react-router"

export const List = ({data, lastNodeRef, loading}) => {
    const location = useLocation()
    return (
            <>
                <ul className="list">
                    {data.map((el, index)=>{
                        if (data.length === index + 1) {
                            return <li ref={lastNodeRef} key={el.id}>
                                <Link  to={`${location.pathname}/${el.id}`}>{el.name}</Link>
                            </li>
                        } else return <li  key={el.id}>
                                <Link  to={`${location.pathname}/${el.id}`}>{el.name}</Link>
                            </li>
                        })
                    }</ul>
                {loading && <h2>Loading...</h2>}
            </>
        )
}