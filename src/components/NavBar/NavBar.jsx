import './Navbar.css'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()

    return (
        <nav className="nb-wrap">
            <p className="nb-logo" onClick={() => navigate('/')}>Fact<span>OS</span></p>

            <div className="nb-links">
                <a className="nb-link" onClick={() => navigate('/')}>Home</a>
                <a className="nb-link" onClick={() => navigate('/search')}>Search</a>
                <a className="nb-link" onClick={() => navigate('/factcheck')}>FactCheck</a>
                <a className="nb-link" onClick={() => navigate('/settings')}>Settings</a>
                <a className="nb-link" onClick={() => navigate('/about')}>About Us</a>
            </div>

            <button className="nb-btn" onClick={() => navigate('/login')}>Sign in</button>
        </nav>
    )
}

export default NavBar