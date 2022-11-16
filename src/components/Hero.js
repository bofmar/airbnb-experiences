import React from "react";
import hero from '../images/photo-grid.png';

export default function Hero() {
  return (
    <div className='hero-section'>
      <img src={hero} alt='collage of pictures of activities' />
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </div>
  );
}
