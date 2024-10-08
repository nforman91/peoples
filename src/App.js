import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./pages/Home";

// PAGES
import WaterWorks from "./pages/WaterWorks";
import Vending from "./pages/Vending";
import Services from "./pages/Services";
import HUSH from "./pages/HUSH";
import Future from "./pages/Future";
import Festivals from "./pages/Festivals";
import HumanFoosball from "./pages/HumanFoosball";
import Merch from "./pages/Merch";
import HisStory from "./pages/HisStory";
import Contact from "./pages/Contact";

// FESTIVALS
import BlueRibbon from "./festivals/BlueRibbon";
import Hinterland from "./festivals/Hinterland";
import Alive515 from "./festivals/Alive515";
import Music8035 from "./festivals/Music8035";
import Greenbelt from "./festivals/Greenbelt";
import IowaCraft from "./festivals/IowaCraft";
import Oktoberfest from "./festivals/Oktoberfest";
import FieldDaze from "./festivals/FieldDaze";
import Ragbrai from "./festivals/Ragbrai";
import Truckin from "./festivals/Truckin";
import Knotfest from "./festivals/Knotfest";
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

            {/* PAGES */}
            <Route exact path="/" element={<Home/>}/>
            <Route path="/waterworks" element={<WaterWorks/>}/>
            <Route path="/vending" element={<Vending/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/hush" element={<HUSH/>}/>
            <Route path="/festivals" element={<Festivals/>}/>
            <Route path="/merch" element={<Merch/>}/>
            <Route path="/future" element={<Future/>}/>
            <Route path="/humanfoosball" element={<HumanFoosball/>}/>
            <Route path="/hisstory" element={<HisStory/>}/>
            <Route path="/contact" element={<Contact/>}/>

            {/* FESTIVALS */}
            <Route path="/blueribbon" element={<BlueRibbon/>}/>
            <Route path="/hinterland" element={<Hinterland/>}/>
            <Route path="/515alive" element={<Alive515/>}/>
            <Route path="/80-35" element={<Music8035/>}/>
            <Route path="/greenbelt" element={<Greenbelt/>}/>
            <Route path="/iowacraft" element={<IowaCraft/>}/>
            <Route path="/oktoberfest" element={<Oktoberfest/>}/>
            <Route path="/fielddaze" element={<FieldDaze/>}/>
            <Route path="/ragbrai" element={<Ragbrai/>}/>
            <Route path="/truckin" element={<Truckin/>}/>
            <Route path="/knotfest" element={<Knotfest/>}/>
            <Route path="/desmoinesarts" element={<DesMoinesArts/>}/>
          </Routes>
    </div>
  );
}

export default App;
