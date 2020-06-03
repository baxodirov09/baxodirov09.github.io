import React from 'react';
import data from "../projects.json";
const Projects = ({ filter }) => {

    let projects = [...data.projects];
    
    return (
        <React.Fragment>
            {
               projects
               .filter((type) => type.type.includes(filter === 'all' ? '' : filter ))
               .map((data) => {
                    return (
                    <div className={`project-box all ${data.type}`} key={data.id}>
                        <div className="project-image">
                           <img src={data.image} alt="img" />
                        </div>
                        <h4>{data.name}</h4>
                        <p>{data.description}</p>
                        <button>View project</button>
                    </div>
                           );
               });             
            }
        </React.Fragment>
    );
}

export default Projects;
