import React from "react";
// import Nav from "./components/Nav";
import Home from "./pages/Home";
import WaterWorks from "./pages/WaterWorks";
import Services from "./pages/Services";
import { Routes, Route } from "react-router-dom";
  // useLocation 

function App() {
  // const location = useLocation();

  return (
    <div className="App">
      {/* <Nav/> */}
        <Routes 
        // location={location} key={location.pathname}
        >
          <Route exact path="/" element={<Home/>}/>
          <Route path="/waterworks" element={<WaterWorks/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
    </div>
  );
}

export default App;
