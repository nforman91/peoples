import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./pages/Home";
import WaterWorks from "./pages/WaterWorks";
import Services from "./pages/Services";
import TBD from "./pages/TBD";
import Festivals from "./pages/Festivals";
import HUSH from "./pages/HUSH";
import HumanFoosball from "./pages/HumanFoosball";
import Merch from "./pages/Merch";
import HisStory from "./pages/HisStory";
import Oktoberfest from "./festivals/Oktoberfest";
import Ragbrai from "./festivals/Ragbrai";
import DesMoinesArts from "./festivals/DesMoinesArts";
import { Routes, Route } from "react-router-dom";

  // useLocation 

function App() {
  // const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle/>
          <Routes 
          // location={location} key={location.pathname}
          >
            <Route exact path="/" element={<Home/>}/>
            <Route path="/blueribbon" element={<WaterWorks/>}/>
            <Route path="/hinterland" element={<Services/>}/>
            <Route path="/515alive" element={<TBD/>}/>
            <Route path="/80-35" element={<Festivals/>}/>
            <Route path="/greenbelt" element={<HUSH/>}/>
            <Route path="/iowacraft" element={<HumanFoosball/>}/>
            <Route path="/oktoberfest" element={<Oktoberfest/>}/>
            <Route path="/fielddaze" element={<Merch/>}/>
            <Route path="/ragbrai" element={<HisStory/>}/>
            <Route path="/truckin" element={<Ragbrai/>}/>
            <Route path="/desmoinesarts" element={<DesMoinesArts/>}/>
          </Routes>
    </div>
  );
}

export default App;
