import React, { useState, useEffect } from 'react';
import PhotoCard from '../../components/PhotoCard.jsx';
import SearchBar from '../../components/SearchBar.jsx';
import Loader from '../../components/Loader.jsx';
import './pitikgallery.css';

// ─── API Config ───────────────────────────────────────────────────────────────
// JSONPlaceholder gives us 5000 photo entries (id, title, albumId, url, thumbnailUrl)
// We swap the url to picsum.photos so images actually load beautifully.
const API_URL = 'https://jsonplaceholder.typicode.com/photos';

// How many photos to show per page
const PAGE_SIZE = 12;

// ─── Main Activity 4 Component ────────────────────────────────────────────────
function PitikGallery() {
    // ── State ──────────────────────────────────────────────────────────────────
    const [photos, setPhotos]       = useState([]);    // raw data from API
    const [filtered, setFiltered]   = useState([]);    // after search filter
    const [loading, setLoading]     = useState(true);  // show loader while fetching
    const [error, setError]         = useState(null);  // hold any error message
    const [search, setSearch]       = useState('');    // search input value
    const [page, setPage]           = useState(1);     // current page number

    // ── Fetch photos from API on mount ────────────────────────────────────────
    useEffect(() => {
        // Reset states before fetching
        setLoading(true);
        setError(null);

        fetch(API_URL)
            .then(res => {
                // Throw if server responded with an error
                if (!res.ok) throw new Error(`API Error: ${res.status}`);
                return res.json();
            })
            .then(data => {
                // Limit to first 100 for performance; tag each with a real image url
                const enriched = data.slice(0, 100).map(photo => ({
                    ...photo,
                    // Replace the placeholder url with a real picsum image
                    imageUrl: `https://picsum.photos/seed/${photo.id}/600/400`,
                    thumb:    `https://picsum.photos/seed/${photo.id}/300/200`,
                }));

                setPhotos(enriched);
                setFiltered(enriched);
                setLoading(false);
                console.log('Activity 4: Fetched', enriched.length, 'photos from API');
            })
            .catch(err => {
                setError(err.message || 'Failed to load photos.');
                setLoading(false);
                console.error('Activity 4 fetch error:', err);
            });
    }, []); // [] = run once on mount

    // ── Filter photos whenever search input changes ────────────────────────────
    useEffect(() => {
        const query = search.toLowerCase().trim();

        if (!query) {
            // No search = show all
            setFiltered(photos);
        } else {
            // Match against title
            setFiltered(
                photos.filter(p => p.title.toLowerCase().includes(query))
            );
        }

        // Reset to page 1 every time the filter changes
        setPage(1);
    }, [search, photos]); // re-runs when search or photos changes

    // ── Pagination helpers ────────────────────────────────────────────────────
    const totalPages  = Math.ceil(filtered.length / PAGE_SIZE);
    const start       = (page - 1) * PAGE_SIZE;
    const currentPage = filtered.slice(start, start + PAGE_SIZE);

    // ── Render ─────────────────────────────────────────────────────────────────
    return (
        <div className="pitikshess">
            {/* Header - reuses the PitikShess brand style */}
            <header className="pitikshess-header">
                <div className="pitikshess-brand">
                    <h1 className="pitikshess-logo">
                        Pitik<span className="pitikshess-gold">Shess</span>
                    </h1>
                    <p className="pitikshess-brand-tag">activity 4 · api gallery</p>
                </div>
            </header>

            <main className="pitikgallery-main">
                <div className="pitikgallery-container">
                    {/* Section heading */}
                    <span className="pitikshess-badge">Live API Data</span>
                    <h2 className="pitikshess-title">
                        Photo <span className="pitikshess-gold">Gallery</span>
                    </h2>
                    <p className="pitikshess-description">
                        {/* Only show count once data is ready */}
                        {!loading && `${filtered.length} photos fetched from JSONPlaceholder API`}
                    </p>

                    {/* SearchBar - reusable component via props */}
                    <SearchBar value={search} onChange={setSearch} />

                    {/* ── Skeletal loading: renders ghost cards matching the real grid ── */}
                    {loading && <Loader count={PAGE_SIZE} />}

                    {error && (
                        <p className="pitikgallery-error">⚠ {error}</p>
                    )}

                    {!loading && !error && filtered.length === 0 && (
                        <p className="pitikgallery-empty">
                            No photos match <strong>"{search}"</strong>. Try another keyword.
                        </p>
                    )}

                    {!loading && !error && filtered.length > 0 && (
                        <>
                            {/* Photo grid - maps each item to a reusable PhotoCard */}
                            <div className="pitikgallery-grid">
                                {currentPage.map(photo => (
                                    <PhotoCard
                                        key={photo.id}
                                        id={photo.id}
                                        title={photo.title}
                                        imageUrl={photo.imageUrl}
                                        thumb={photo.thumb}
                                        albumId={photo.albumId}
                                    />
                                ))}
                            </div>

                            {/* Pagination controls */}
                            <div className="pitikgallery-pagination">
                                <button
                                    className="pitikshess-btn-secondary"
                                    onClick={() => setPage(p => p - 1)}
                                    disabled={page === 1}
                                >
                                    ← Prev
                                </button>

                                <span className="pitikgallery-page-info">
                                    Page {page} of {totalPages}
                                </span>

                                <button
                                    className="pitikshess-btn-secondary"
                                    onClick={() => setPage(p => p + 1)}
                                    disabled={page === totalPages}
                                >
                                    Next →
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}

export default PitikGallery;