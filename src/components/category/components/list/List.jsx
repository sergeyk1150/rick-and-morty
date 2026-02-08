import { Link, useLocation } from "react-router"

export const List = ({data}) => {
    const location = useLocation()
    return (
            <>
                <ul className="list">
                    {data.map((el)=>{
                        return <li key={el.id}>
                                <Link to={`${location.pathname}/${el.id}`}>{el.name}</Link>
                            </li>})
                    }</ul>
                    
            </>
        )
}