import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

function PublicRoute({ children }) {
    const { user } = useAuth()
    if (user) return <Navigate to="/home" />
    return children
}

export default PublicRoute