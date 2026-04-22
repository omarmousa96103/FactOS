import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'

// apply saved theme on every page load
const savedTheme    = localStorage.getItem('theme')    || 'light'
const savedFontSize = localStorage.getItem('fontSize') || 'medium'
const fontSizes     = { small: '13px', medium: '15px', large: '17px' }

document.documentElement.setAttribute('data-theme', savedTheme)
document.documentElement.style.setProperty('--base-font-size', fontSizes[savedFontSize])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <App />
    </AuthProvider>
)