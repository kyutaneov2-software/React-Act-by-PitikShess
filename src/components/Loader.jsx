import React from 'react';
import './Loader.css';

// ─── Loader ────────────────────────────────────────────────────────────────────
// Simple animated spinner shown while the API fetch is in progress.
// No props needed - it just renders itself.
// ─────────────────────────────────────────────────────────────────────────────
function Loader() {
    return (
        <div className="loader-wrap" aria-label="Loading">
            {/* Gold spinning ring */}
            <div className="loader-ring" />
            <p className="loader-text">Fetching photos...</p>
        </div>
    );
}

export default Loader;