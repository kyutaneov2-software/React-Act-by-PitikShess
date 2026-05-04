import React from 'react';
import './DataCard.css'; // optional custom styling

function PitikData({ title, description, tech, category }) {
    return (
        <div className="data-card">
            <h3 className="data-card-title">{title}</h3>
            <p className="data-card-desc">{description}</p>
            <div className="data-card-tech">
                {tech.map((item, index) => (
                <span key={index} className="tech-badge">{item}</span>
                ))}
            </div>
            <span className="data-card-category">{category}</span>
        </div>
    );
}

export default PitikData;