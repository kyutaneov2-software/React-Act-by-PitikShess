import React, { useState } from 'react';
import './PhotoCard.css';

// ─── PhotoCard ────────────────────────────────────────────────────────────────
// Reusable component - receives photo data as props from the parent (PitikGallery)
// Props:
//   id       - unique photo ID from the API
//   title    - photo title from the API
//   imageUrl - full-size image URL (picsum)
//   thumb    - thumbnail URL for initial fast load
//   albumId  - album group number from the API
// ─────────────────────────────────────────────────────────────────────────────
function PhotoCard({ id, title, imageUrl, albumId }) {
    // Track whether the image has loaded yet
    const [imgLoaded, setImgLoaded] = useState(false);
    // Track if user has liked this photo (local UI state)
    const [liked, setLiked] = useState(false);

    return (
        <div className="photo-card">
            {/* Image area with skeleton loader while image loads */}
            <div className="photo-card-img-wrap">
                {/* Skeleton placeholder - hides once image loads */}
                {!imgLoaded && <div className="photo-card-skeleton" />}

                <img
                    src={imageUrl}
                    alt={title}
                    className={`photo-card-img ${imgLoaded ? 'visible' : 'hidden'}`}
                    onLoad={() => setImgLoaded(true)} // fires when browser finishes loading
                    onError={e => {
                        // Fallback if picsum is down
                        e.target.src = `https://via.placeholder.com/600x400/1a1a1a/d4af37?text=PitikShess`;
                        setImgLoaded(true);
                    }}
                />

                {/* Like button overlay */}
                <button
                    className={`photo-card-like ${liked ? 'active' : ''}`}
                    onClick={() => setLiked(l => !l)}
                    aria-label="Like photo"
                >
                    {liked ? '♥' : '♡'}
                </button>
            </div>

            {/* Card body */}
            <div className="photo-card-body">
                {/* Capitalize the API title for nicer display */}
                <h3 className="photo-card-title">
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                </h3>

                <div className="photo-card-meta">
                    {/* Album badge - groups photos by album from the API */}
                    <span className="tech-badge">Album {albumId}</span>
                    <span className="photo-card-id">#{id}</span>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;