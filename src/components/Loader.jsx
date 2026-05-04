import React from 'react';
import './Loader.css';

// ─── SkeletonCard ──────────────────────────────────────────────────────────────
// A single ghost card that mimics the shape of a real PhotoCard.
// The shimmer animation sweeps across to signal "loading in progress".
// No props needed.
// ─────────────────────────────────────────────────────────────────────────────
function SkeletonCard() {
    return (
        <div className="skeleton-card" aria-hidden="true">
            {/* Mimics the photo image area */}
            <div className="skeleton-img" />

            {/* Mimics the card body text */}
            <div className="skeleton-body">
                <div className="skeleton-line skeleton-line--title" />
                <div className="skeleton-line skeleton-line--short" />
                <div className="skeleton-meta">
                    <div className="skeleton-badge" />
                    <div className="skeleton-id" />
                </div>
            </div>
        </div>
    );
}

// ─── Loader ────────────────────────────────────────────────────────────────────
// Renders a grid of SkeletonCards that matches the real photo grid layout.
// Props:
//   count - how many skeleton cards to show (default: 12 = one full page)
// ─────────────────────────────────────────────────────────────────────────────
function Loader({ count = 12 }) {
    // Array(count) creates an empty array; we just need the index for the key
    return (
        <div className="skeleton-grid" role="status" aria-label="Loading photos">
            {Array(count).fill(null).map((_, i) => (
                <SkeletonCard key={i} />
            ))}
        </div>
    );
}

export default Loader;