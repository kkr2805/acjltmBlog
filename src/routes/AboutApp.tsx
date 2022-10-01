import React from 'react';
import Reset from 'styled-reset';
import Header from '../components/Header';
import {Nav_About} from '../components/Nav';
import Content from '../components/Content';
import Aside from '../components/Aside';
import Advertise from '../components/Advertise';
import Footer from '../components/Footer';


function AboutAppNav1() {
  return (
    <div className='screen-grid'>
      <Nav_About />
      <Content gridColumn={6} articleId={15} />
      <Aside />
      <Advertise />
    </div>
  );
}

function AboutAppNav2() {
  return (
    <div className='screen-grid'>
      <Nav_About />
      <Content gridColumn={6} articleId={16} />
      <Aside />
      <Advertise />
    </div>
  );
}

function AboutAppNav3() {
  return (
    <div className='screen-grid'>
      <Nav_About />
      <Content gridColumn={6} articleId={17} />
      <Aside />
      <Advertise />
    </div>
  );
}

export {AboutAppNav1,AboutAppNav2,AboutAppNav3 };