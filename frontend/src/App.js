import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../src/Customer/screen/home'
import Menuitem from '../src/Customer/screen/menuitemsc'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/Customer/components/navbar";
import Topbar from "../src/Customer/components/topbar";

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <br></br>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/home" element={<Home />} />
            <Route path="/menuitem" element={<Menuitem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
