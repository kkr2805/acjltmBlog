import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Aside from './components/Aside';
import Advertise from './components/Advertise';
import Footer from './components/Footer';


function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Nav />
      <Article />
      <Aside />
      <Advertise />
      <Footer />
    </div>
  );
}

export default App;
