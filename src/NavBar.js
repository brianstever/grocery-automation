import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

const NavBar = () => {
  return (
    <div className='NavBar'>
      <Link to='/' className='logo'>Home</Link>
    </div>
  );
}

export default NavBar;
