import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
  // useLocation 

function App() {
  // const location = useLocation();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes 
        // location={location} key={location.pathname}
        >
          <Route exactpath="/" element={<Home/>}/>
        </Routes>
        <p>Hello World 2</p>
      </BrowserRouter>
    </div>
  );
}

export default App;
