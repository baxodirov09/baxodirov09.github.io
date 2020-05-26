import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Loader from "./components/Loader";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() =>{
      setLoader(false)
    }, 2000);
    // eslint-disable-next-line
  }, []);


  return (
    <React.Fragment>
    {loader ? <Loader /> :
        <Router>
        <div className="App d-flex">
          <Navbar />
          <Main />
        </div>
      </Router>
    }

    </React.Fragment>
  );
}

export default App;
