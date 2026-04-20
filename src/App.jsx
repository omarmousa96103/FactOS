import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/home' element ={<HomePage/>}/>
                <Route path='/search' element={<SearchPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App