import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/Login'
import SignUpPage from './pages/Signup'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import FactCheckPage from './pages/FactCheckPage'
import SettingsPage from './pages/SettingPage'
import AboutPage from './pages/AboutUsPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public — redirect to home if already logged in */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={
                    <PublicRoute><LoginPage /></PublicRoute>
                } />
                <Route path="/signup" element={
                    <PublicRoute><SignUpPage /></PublicRoute>
                } />

                {/* Protected — redirect to login if not logged in */}
                <Route path="/home" element={
                    <ProtectedRoute><HomePage /></ProtectedRoute>
                } />
                <Route path="/search" element={
                    <ProtectedRoute><SearchPage /></ProtectedRoute>
                } />
                <Route path="/factcheck" element={
                    <ProtectedRoute><FactCheckPage /></ProtectedRoute>
                } />
                <Route path="/settings" element={
                    <ProtectedRoute><SettingsPage /></ProtectedRoute>
                } />
                <Route path="/about" element={<AboutPage />} />

                {/* Catch all */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App