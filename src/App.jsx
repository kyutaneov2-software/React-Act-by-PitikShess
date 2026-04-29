import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import McoLandingPage from './Activities/mco/landingpage.jsx';
import Pitikshess from './Activities/activity1/pitikshess.jsx';
import Photostudio from './Activities/activity2/photostudio.jsx';
import PitikDataView from './Activities/activity3/pitikdatas.jsx';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <PitikNav />
            <Routes>
                <Route path="/" element={<McoLandingPage />} />
                <Route path="/pitikshess" element={<Pitikshess />} />
                <Route path="/photostudio" element={<Photostudio />} />
                <Route path="/pitikdatas" element={<PitikDataView />} />
            </Routes>
        </BrowserRouter>
    );
}

// Floating Navigation Component
function PitikNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMenuOpen && !e.target.closest('.pitik-nav')) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [window.location.pathname]);

    return (
        <div className="pitik-nav">
            {/* Main Floating Button */}
            <button 
                className="pitik-nav-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Navigation menu"
            >
                <span className={`pitik-nav-hamburger ${isMenuOpen ? 'active' : ''}`}>
                    <span className="pitik-nav-line"></span>
                    <span className="pitik-nav-line"></span>
                    <span className="pitik-nav-line"></span>
                </span>
            </button>

            {/* Navigation Menu */}
            <div className={`pitik-nav-menu ${isMenuOpen ? 'visible' : ''}`}>
                <NavLink 
                    to="/"
                    className={({ isActive }) => `pitik-nav-link ${isActive ? 'current' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span className="pitik-nav-label">MCO Landing</span>
                </NavLink>
                
                <NavLink 
                    to="/pitikshess"
                    className={({ isActive }) => `pitik-nav-link ${isActive ? 'current' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span className="pitik-nav-label">Pitikshess</span>
                </NavLink>

				<NavLink
					to="/photostudio"
					className={({ isActive }) => `pitik-nav-link ${isActive ? 'current' : ''}`}
					onClick={() => setIsMenuOpen(false)}
				>	
					<span className="pitik-nav-label">Photo Studio</span>
				</NavLink>

				<NavLink
					to="/pitikdatas"
					className={({ isActive }) => `pitik-nav-link ${isActive ? 'current' : ''}`}
					onClick={() => setIsMenuOpen(false)}
				>	
					<span className="pitik-nav-label">Pitik Data Viewer</span>
				</NavLink>
            </div>
        </div>
    );
}

export default App;