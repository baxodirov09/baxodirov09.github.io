import React, { useState } from "react";
import "./styles/work.css";
import Projects from "./Projects";

export default function Work() {
  const [filter, setFilter] = useState('all');

  const filterProject = (type) => {
    setFilter(type)
  };



  return (
    <div className="work">
      <div className="portfolio__title animate__animated animate__fadeIn ">
        <h1>Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima
          incidunt nulla delectus inventore placeat excepturi quisquam, odit
          totam omnis voluptates accusantium officia dolor itaque nemo quasi
          fugit exercitationem necessitatibus.
        </p>
      </div>
      <div className="portfolio__projects">
        <div className="project__title">
          <button onClick={() => filterProject("all")}>All</button>
          <button onClick={() => filterProject("web")}>Web Apps</button>
          <button onClick={() => filterProject("mobile")}>Mob Apps</button>
          <button onClick={() => filterProject("front")}>Front end</button>
          <button onClick={() => filterProject("back")}>Back end</button>
        </div>
        <div className="projects">
          <Projects filter={filter} />
        </div>
      </div>
    </div>
  );
}
