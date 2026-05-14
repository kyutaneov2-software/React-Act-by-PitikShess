import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import McoLandingPage from './Activities/mco/landingpage.jsx';
import Pitikshess from './Activities/activity1/pitikshess.jsx';
import Photostudio from './Activities/activity2/photostudio.jsx';
import PitikDataView from './Activities/activity3/pitikdatas.jsx';
import PitikGallery from './Activities/activity4/pitikgallery.jsx';
import './App.css';

// Custom SVG icons for each link
const iconMco = () => (
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
</svg>
);
const iconPitik = () => (
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
</svg>
);
const iconStudio = () => (
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
</svg>
);
const iconData = () => (
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
</svg>
);
const iconGallery = () => (
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
</svg>
);

function App() {
return (
    <BrowserRouter>
    <FloatingNav />
    <Routes>
        <Route path="/"            element={<McoLandingPage />} />
        <Route path="/pitikshess"  element={<Pitikshess />} />
        <Route path="/photostudio" element={<Photostudio />} />
        <Route path="/pitikdatas"  element={<PitikDataView />} />
        <Route path="/pitikgallery" element={<PitikGallery />} />
    </Routes>
    </BrowserRouter>
);
}

function FloatingNav() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

useEffect(() => {
    const handleClickOutside = (e) => {
    if (isMenuOpen && !e.target.closest('.float-nav')) {
        setIsMenuOpen(false);
    }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
}, [isMenuOpen]);

useEffect(() => {
    setIsMenuOpen(false);
}, [window.location.pathname]);

return (
    <div className="float-nav">
        <button
            className={`float-nav-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Navigation menu"
        >
            <span className="float-nav-hamburger">
            <span className="float-nav-line"></span>
            <span className="float-nav-line"></span>
            <span className="float-nav-line"></span>
            </span>
        </button>

        <div className={`float-nav-menu ${isMenuOpen ? 'visible' : ''}`}>
            <NavLink to="/" className={({ isActive }) => `float-nav-link ${isActive ? 'current' : ''}`}>
                <span className="float-nav-icon">{iconMco()}</span>
                <span className="float-nav-label">Home Page</span>
            </NavLink>
            <NavLink to="/pitikshess" className={({ isActive }) => `float-nav-link ${isActive ? 'current' : ''}`}>
                <span className="float-nav-icon">{iconPitik()}</span>
                <span className="float-nav-label">Act-1 Pitikshess</span>
            </NavLink>
            <NavLink to="/photostudio" className={({ isActive }) => `float-nav-link ${isActive ? 'current' : ''}`}>
                <span className="float-nav-icon">{iconStudio()}</span>
                <span className="float-nav-label">Act-2 Photo Studio</span>
            </NavLink>
            <NavLink to="/pitikdatas" className={({ isActive }) => `float-nav-link ${isActive ? 'current' : ''}`}>
                <span className="float-nav-icon">{iconData()}</span>
                <span className="float-nav-label">Act-3 Pitik Data Viewer</span>
            </NavLink>
            <NavLink to="/pitikgallery" className={({ isActive }) => `float-nav-link ${isActive ? 'current' : ''}`}>
                <span className="float-nav-icon">{iconGallery()}</span>
                <span className="float-nav-label">Act-4 Photo Gallery</span>
            </NavLink>
        </div>
    </div>
);
}

export default App;