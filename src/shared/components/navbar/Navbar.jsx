import {AuthStatus, useAuth} from '@/entities'
import { useNavigate,Link } from 'react-router'

export const Navbar = ({close}) => {
    const navigate = useNavigate()
    const auth = useAuth()
    const isLogged = AuthStatus()
        const handleSignout = () => {
        auth.singout(()=>{
            navigate('/')
        })
    }
    const handleCloseMenu = (event) => {
        if (event.target.closest('a')) {
            close()
        }
    }
    return (
        <nav className="nav-links" onClick={handleCloseMenu}>
            <Link to="/">Главная</Link>
            <Link to="/characters">Герои</Link>
            <Link to="/locations">Локации</Link>
            <Link to="/episodes">Эпизоды</Link>
            {isLogged ? <Link onClick={handleSignout}>Выйти</Link>:<Link to="/login">Войти</Link>}
        </nav>
    )
}