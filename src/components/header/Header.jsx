import { Link } from "react-router"

export const Header = ()  => {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="logo">Rick & Morty</div>
                <nav className="nav-links">
                    <Link to="/">Главная</Link>
                    <Link to="/characters">Герои</Link>
                    <Link to="/locations">Локации</Link>
                    <Link to="/episodes">Эпизоды</Link>
                </nav>
            </div>
        </header>
      )
}