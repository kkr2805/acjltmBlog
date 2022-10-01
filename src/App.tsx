import React from 'react';
import Reset from 'styled-reset';
import {Outlet, Link} from "react-router-dom"
import Header from './components/Header';
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
