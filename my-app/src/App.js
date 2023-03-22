import React, { useState, useEffect } from "react";
import "./index.css";
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main"
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home"

function App() {
  return (
    <Main>
      <Sidebar />
      <div className="mainView">
        <Header />
        <Routes>
          <Route path="/" element={ <Home />} />
        </Routes>
      </div>
    </Main>

    
  );
}

export default App;
