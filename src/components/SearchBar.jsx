import React from 'react';
import './SearchBar.css';

// ─── SearchBar ─────────────────────────────────────────────────────────────────
// Reusable controlled input component.
// Props:
//   value    - current search string (controlled by parent via useState)
//   onChange - callback to update the parent's state
// ─────────────────────────────────────────────────────────────────────────────
function SearchBar({ value, onChange }) {
    return (
        <div className="searchbar-wrap">
            {/* Search icon */}
            <span className="searchbar-icon">⌕</span>

            <input
                type="text"
                className="searchbar-input"
                placeholder="Search photos by title..."
                value={value}
                // Pass user's input up to the parent component
                onChange={e => onChange(e.target.value)}
                aria-label="Search photos"
            />

            {/* Clear button - only shows when there is text */}
            {value && (
                <button
                    className="searchbar-clear"
                    onClick={() => onChange('')}
                    aria-label="Clear search"
                >
                    ×
                </button>
            )}
        </div>
    );
}

export default SearchBar;