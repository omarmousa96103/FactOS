import { createContext, useContext, useState } from 'react'
import { api } from '../api'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    )

    const login = async (email, password) => {
        const data = await api.login({ email, password })
        if (data.token) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data))
            setUser(data)
            return { success: true }
        }
        return { success: false, message: data.message }
    }

    const signup = async (firstName, lastName, email, password) => {
        const data = await api.signup({ firstName, lastName, email, password })
        if (data.token) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data))
            setUser(data)
            return { success: true }
        }
        return { success: false, message: data.message }
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)