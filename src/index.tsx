import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App';
import AboutApp from './routes/AboutApp';

// ReactDOM.render(<App/>, document.getElementById("root"))

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="about" element={<AboutApp />} />
            </Route>
        </Routes>
    </Router>,
    rootElement
);