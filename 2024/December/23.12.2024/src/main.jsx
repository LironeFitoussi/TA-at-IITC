import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import ImageAvatars from './components/Avatars.jsx' 

// Pages 
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/avatars" element={<ImageAvatars />} />
            <Route path="/home" element={<Home />} />
        </Routes> 
    </BrowserRouter>
)
