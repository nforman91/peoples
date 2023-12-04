import React from "react";
// import Nav from "./components/Nav";
import Home from "./pages/Home";
import WaterWorks from "./pages/WaterWorks";
import Services from "./pages/Services";
import TBD from "./pages/TBD";
import Festivals from "./pages/Festivals";
import HUSH from "./pages/HUSH";
import HumanFoosball from "./pages/HumanFoosball";
import Merch from "./pages/Merch";
import HisStory from "./pages/HisStory";
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
          <Route path="/tbd" element={<TBD/>}/>
          <Route path="/festivals" element={<Festivals/>}/>
          <Route path="/hush" element={<HUSH/>}/>
          <Route path="/humanfoosball" element={<HumanFoosball/>}/>
          <Route path="/merch" element={<Merch/>}/>
          <Route path="/hisstory" element={<HisStory/>}/>
        </Routes>
    </div>
  );
}

export default App;
