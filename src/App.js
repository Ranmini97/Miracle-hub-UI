import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

//routing
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home.js';
import Dashboard from './Pages/Dashboard.js';
import Login from './Pages/Login.js';
import Signup from './Pages/Signup.js';
import Item from './Pages/Item.js';
import Mysterybox from './Pages/Mysterybox.js';


function App() {
  return (
    <div className="">
      <Navigation/>
    <div className='top-fix'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/Login" element= {<Login/>} />
          <Route path="/Signup" element= {<Signup/>} />
          <Route path="/Dashboard" element= {<Dashboard/>} />
          <Route path="/Item" element= {<Item/>} />
          <Route path="/Mysterybox" element= {<Mysterybox/>} />
        </Routes>

      </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;