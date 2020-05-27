import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Work from "./Work";

const Main = () => {
  return (
    <div className='main'>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/about" component={About} />
        <Route  path="/skills" component={Skills} />
        <Route  path="/work" component={Work} />
        <Route  path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default Main;
