import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/registrar">Registrar</Link></li>
            </ul>
        </nav>
    )
}