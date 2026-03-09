import { BurgerMenu, HeaderMenu,Navbar } from "../../shared/components"
export const Header = ()  => {
    
    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="logo">Rick & Morty</div>
                <HeaderMenu>
                    <Navbar/>
                </HeaderMenu>
                <BurgerMenu/>
            </div>
        </header>
      )
}