import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App';
import {AboutAppNav1, AboutAppNav2, AboutAppNav3} from './routes/AboutApp';
import {WebBusinessAppNav1, WebBusinessAppNav2, WebBusinessAppNav3} from './routes/WebBusinessApp';
import {DataServiceAppNav1, DataServiceAppNav2, DataServiceAppNav3} from './routes/DataServiceApp';
import ArchiveApp from './routes/ArchiveApp';
import Content from './components/Content';

// ReactDOM.render(<App/>, document.getElementById("root"))

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/about/nav1" element={<AboutAppNav1 />} />
                <Route path="/about/nav2" element={<AboutAppNav2 />} />
                <Route path="/about/nav3" element={<AboutAppNav3 />} />
                <Route path="/webBusiness/nav1" element={<WebBusinessAppNav1 />} />
                <Route path="/webBusiness/nav2" element={<WebBusinessAppNav2 />} />
                <Route path="/webBusiness/nav3" element={<WebBusinessAppNav3 />} />
                <Route path="/dataService/nav1" element={<DataServiceAppNav1 />} />
                <Route path="/dataService/nav2" element={<DataServiceAppNav2 />} />
                <Route path="/dataService/nav3" element={<DataServiceAppNav3 />} />
                <Route path="/archive/:articleId" element={<ArchiveApp />} />
                <Route path="/about" element={<Content gridColumn={6} articleId={2} />} />
            </Route>
        </Routes>
    </Router>,
    rootElement
);