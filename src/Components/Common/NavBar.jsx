import "./NavBar.css"
import logo from '/world.svg'
import { Link } from 'react-router-dom'

function NavBar(){
    return (
        <>
            <nav>
                <ul>
                    <li><Link className="brand-box" to="/">
                        <img src={logo} className="brand-logo react" alt="Brand logo" />
                        <div className="brand-name">History</div>
                    </Link></li>
                    <li><Link to="/events">
                        <div className="nav-item">Events</div>
                    </Link></li>
                    <li><Link to="/figures">
                        <div className="nav-item">Figures</div>
                    </Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;