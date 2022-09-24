import React from 'react';
import Reset from 'styled-reset';
import {Outlet, Link} from "react-router-dom"
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Content';
import Aside from './components/Aside';
import Advertise from './components/Advertise';
import Footer from './components/Footer';


function App() {
  return (
    <div className='app-grid'>
      <Header />
      <div className='background-div'></div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
