    import React from 'react';
    import './DataCard.css';

    function PitikData({ title, description, tech, category }) {
    return (
        <div className="pitik-card">
            <h3 className="pitik-card-title">{title}</h3>
            <p className="pitik-card-desc">{description}</p>
            <div className="pitik-card-tech">
                {tech.map((item, index) => (
                <span key={index} className="pitik-tech-badge">{item}</span>
                ))}
            </div>
            <span className="pitik-card-category">{category}</span>
        </div>
    );
    }

    export default PitikData;