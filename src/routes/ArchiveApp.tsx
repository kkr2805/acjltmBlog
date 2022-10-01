import React from 'react';
import Reset from 'styled-reset';
import {Nav_Archive} from '../components/Nav';
import Content from '../components/Content';
import Aside from '../components/Aside';
import Advertise from '../components/Advertise';
import {BrowserRouter as Router, Routes, Route, Outlet, useParams} from "react-router-dom";

function ArchiveApp() {
  var params = useParams();
  var articleId: number = Number(params.articleId);
  return (
    <div className='screen-grid'>
      <Nav_Archive />
      <Content gridColumn={3} articleId={articleId} />
      <Aside />
      <Advertise />
    </div>
  );
}

export default ArchiveApp;