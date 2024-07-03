import "./NavBar.css"
import logo from '/world.svg'

function NavBar(){
    return (
        <header>
            <a href="">
            <img src={logo} className="brand-logo react" alt="Brand logo" />
            </a>
            <a href="">
                <div className="brand-name">History</div>
            </a>
            <a href="">
                <div className="nav-item">Events</div>
            </a>
            <a href="">
                <div className="nav-item">Figures</div>
            </a>
        </header>
    )
}

export default NavBar;