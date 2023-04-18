import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <div className="container">
            <Header></Header>
            <div id="detail" className='main'> 
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
    </div>

  )
}

export default App;
