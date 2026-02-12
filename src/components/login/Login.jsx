import { useLocation, useNavigate } from "react-router"
import { useAuth } from "../../context/useAuth"

export const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from || '/'
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const username = formData.get('username')
        if (username) {
            auth.singin(username, ()=>{
            navigate(from, {
                replace: true
            })
        })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="container login__container">
                <label>Username</label>
                <input type="text" name="username"/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}