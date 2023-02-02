import React from "react";

function ProjectItem({ key, name, about, technologies }) {
  const technologyElements = technologies.map((technology) => {
    return <span key={technology}>{technology}</span>;
  });

  return (
    <div className="project-item" key={key}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyElements}
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
