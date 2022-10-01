import React from 'react';
import Reset from 'styled-reset';
import Header from '../components/Header';
import {Nav_DataService} from '../components/Nav';
import Content from '../components/Content';
import Aside from '../components/Aside';
import Advertise from '../components/Advertise';
import Footer from '../components/Footer';


function DataServiceAppNav1() {
  return (
    <div className='screen-grid'>
      <Nav_DataService />
      <Content gridColumn={8} articleId={30} />
      <Aside />
    </div>
  );
}

function DataServiceAppNav2() {
  return (
    <div className='screen-grid'>
      <Nav_DataService />
      <Content gridColumn={8} articleId={31} />
      <Aside />
    </div>
  );
}

function DataServiceAppNav3() {
  return (
    <div className='screen-grid'>
      <Nav_DataService />
      <Content gridColumn={8} articleId={32} />
      <Aside />
    </div>
  );
}

export {DataServiceAppNav1, DataServiceAppNav2, DataServiceAppNav3};