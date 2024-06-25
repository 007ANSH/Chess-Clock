import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

import "./App.css";

import  GamePage  from "./component/GamePage";
import Home from "./component/Home";
function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:time" element={<GamePage />} />
        </Routes>
      </Router>
    </>
  );  
}

export default App;
