import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Userdata from './Userdata';
import Footer from "./Footer";
import Header from './Header';

function App() {
  return (
    <Router>
      <div>
      <Header />
      <Routes>
      <Route path="/" element={<Userdata />} />
      </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
