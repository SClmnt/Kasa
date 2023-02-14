import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
 
function Header() {
    return (
        <header>
            <p>K<img src={logo} alt="Logo Kasa"/>sa</p>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about-us">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header