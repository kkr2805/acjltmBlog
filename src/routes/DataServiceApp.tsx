import React from 'react';
import Reset from 'styled-reset';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Content from '../components/Content';
import Aside from '../components/Aside';
import Advertise from '../components/Advertise';
import Footer from '../components/Footer';


function DataServiceApp() {
  return (
    <div className='screen-grid'>
      <Nav />
      <Content gridColumn={8}/>
    </div>
  );
}

export default DataServiceApp;