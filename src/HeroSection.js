import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-container'>
        <h1>FridgeFiller4000</h1>
        <h2>We've got AI, shit should just be easier now... Like meal prep & ordering your groceries.</h2>
        <Link to='/login'>
          <button className='cool-button'>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
