import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './Navbar.css'

function NavBar() {
    const navigate = useNavigate()
    const { user, logout } = useAuth()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <nav className="nb-wrap">
            <p className="nb-logo" onClick={() => navigate('/')}>Fact<span>OS</span></p>

            <div className="nb-links">
                <a className="nb-link" onClick={() => navigate('/home')}>Home</a>
                <a className="nb-link" onClick={() => navigate('/search')}>Search</a>
                <a className="nb-link" onClick={() => navigate('/factcheck')}>FactCheck</a>
                <a className="nb-link" onClick={() => navigate('/settings')}>Settings</a>
                <a className="nb-link" onClick={() => navigate('/about')}>About Us</a>
            </div>

            {user ? (
                <div className="nb-user">
                    <span className="nb-username">{user.firstName}</span>
                    <button className="nb-btn nb-btn--logout" onClick={handleLogout}>Sign out</button>
                </div>
            ) : (
                <button className="nb-btn" onClick={() => navigate('/login')}>Sign in</button>
            )}
        </nav>
    )
}

export default NavBar