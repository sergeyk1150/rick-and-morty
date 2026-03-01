import { Link, useNavigate } from "react-router"
import { AuthStatus, useAuth } from "../../entities"



export const Header = ()  => {
    const navigate = useNavigate()
    const auth = useAuth()
    const isLogged = AuthStatus()

    const handleSignout = () => {
        auth.singout(()=>{
            navigate('/')
        })
    }
    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="logo">Rick & Morty</div>
                <nav className="nav-links">
                    <Link to="/">Главная</Link>
                    <Link to="/characters">Герои</Link>
                    <Link to="/locations">Локации</Link>
                    <Link to="/episodes">Эпизоды</Link>
                    {isLogged ? <Link onClick={handleSignout}>Выйти</Link>:<Link to="/login">Войти</Link>}
                </nav>
            </div>
        </header>
      )
}