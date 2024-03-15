import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
function Footer() {
  return (
    <div className='footer'>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/about">About Us</Link></div>
    </div>
  )
}

export default Footer
