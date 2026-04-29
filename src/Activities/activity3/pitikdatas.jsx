import React, { useState, useEffect } from 'react';
import PitikData from '../../components/DataCard.jsx';  
import projectsData from '../../data/projects.json';

function PitikDataViewer() {  
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Runs once when the component first appears
    useEffect(() => {
        try {
            setTimeout(() => {
                setProjects(projectsData); // Fill projects array
                setLoading(false);         // Done loading
                console.log('Activity 3: Data loaded successfully');
            }, 600);
        } catch (err) {
            setError('Failed to load project data.');
            setLoading(false);
        }
    }, []); // Empty array = run once

    return (
        <div className="pitikshess">
            <header className="pitikshess-header">
                <div className="pitikshess-brand">
                    <h1 className="pitikshess-logo">
                        Pitik<span className="pitikshess-gold">Shess</span>
                    </h1>
                    <p className="pitikshess-brand-tag">activity 3 · data viewer</p>
                </div>
            </header>

            <main className="pitikshess-main">
                <div className="pitikshess-container">
                    <span className="pitikshess-badge">JSON Data with Hooks</span>
                    <h2 className="pitikshess-title">
                        Project <span className="pitikshess-gold">Showcase</span>
                    </h2>

                    {/* Show different things based on state */}
                    {loading && <p className="pitikshess-description">Loading projects…</p>}
                    {error && <p className="pitikshess-description" style={{ color: '#d4af37' }}>{error}</p>}

                    {!loading && !error && (
                        <div className="projects-grid">
                            {/* Loop through projects and render a PitikData card for each */}
                            {projects.map(project => (
                                <PitikData
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    tech={project.tech}
                                    category={project.category}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default PitikDataViewer;