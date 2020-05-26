import React from "react";
import samurai from "../assets/samurai_PNG26.png";
import "./styles/home.css";
import Particle from "../Particle";
const Home = () => {
  return (
    <section>
      <div className="home">
        <div className="left">
            <div className="particle">
            <Particle />
            </div>
          <div className="left__info">
            <h1>HI I'M AKMAL</h1>
            <p>FRONT END/REACT JS DEVELOPER</p>
          </div>
        </div>
        <div className="right ">
          <div className="circle animate__animated animate__backInDown">
            <img  src={samurai} alt="samurai" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
