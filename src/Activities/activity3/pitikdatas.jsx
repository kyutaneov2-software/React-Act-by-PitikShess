    import React from 'react';
    import PitikData from '../../components/DataCard.jsx';
    import projectsData from '../../data/projects.json';  // direct import – no fetch needed

    function PitikDatas() {
    // No loading/error state required when importing statically

    return (
        <div className="pitikdatas-wrapper">
        <h2 className="pitikdatas-heading">Activity 3 – Project List</h2>
            <div className="pitikdatas-grid">
                {projectsData.map((project) => (
                <PitikData
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    category={project.category}
                />
                ))}
            </div>
        </div>
    );
    }

    export default PitikDatas;