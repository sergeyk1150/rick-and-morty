import { Link, useNavigate } from "react-router"
import { useAuth } from "../../context/useAuth"


export const Header = ()  => {
    const navigate = useNavigate()
    const auth = useAuth()
    const logged = auth.user
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
                    {logged ? <Link onClick={handleSignout}>Выйти</Link>:<Link to="/login">Войти</Link>}
                </nav>
            </div>
        </header>
      )
}