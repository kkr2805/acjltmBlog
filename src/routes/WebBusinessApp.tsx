import React from 'react';
import Reset from 'styled-reset';
import Header from '../components/Header';
import {Nav_WebBusiness} from '../components/Nav';
import Content from '../components/Content';
import Aside from '../components/Aside';
import Advertise from '../components/Advertise';
import Footer from '../components/Footer';

function WebBusinessAppNav1() {
  return (
    <div className='screen-grid'>
      <Nav_WebBusiness />
      <Content gridColumn={8} articleId={60} />
    </div>
  );
}

function WebBusinessAppNav2() {
  return (
    <div className='screen-grid'>
      <Nav_WebBusiness />
      <Content gridColumn={8} articleId={61} />
    </div>
  );
}

function WebBusinessAppNav3() {
  return (
    <div className='screen-grid'>
      <Nav_WebBusiness />
      <Content gridColumn={8} articleId={62} />
    </div>
  );
}

export {WebBusinessAppNav1, WebBusinessAppNav2, WebBusinessAppNav3};