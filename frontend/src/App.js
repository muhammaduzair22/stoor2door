import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../src/Customer/screen/home'
import Menuitem from '../src/Customer/screen/menuitemsc'
import Signup from '../src/Customer/screen/signup'
import Login from '../src/Customer/screen/login'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/Customer/components/navbar";
import Topbar from "../src/Customer/components/topbar";
import Footer from "../src/Customer/components/footer";

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <br></br>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menuitemsc/:type" element={<Menuitem />} />
        </Routes>
      </BrowserRouter>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
