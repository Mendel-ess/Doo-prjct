import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/peliculas">Peliculas</Link></li>
                <li><Link to="/series">Series</Link></li>
                <li><Link to="/login">Iniciar sesion</Link></li>
                <li><Link to="/registrar">Registrar</Link></li>
            </ul>
        </nav>
        
    )
}