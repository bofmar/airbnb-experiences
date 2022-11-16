import React from "react"
import star from '../images/star.png';

//export default function Card(props) {
export default function Card(props) {
  const { picName, rating, reviews, location, description, price } = props.experience;
  return (
    <div className='card'>
      <img src={require(`../images/${picName}.png`)} className='card-image' />
      <div className='card-stats'>
        <img src={star} className='card-star' />
        <span>{rating}</span>
        <span className='gray'>({reviews}) • </span>
        <span className='gray'>{location}</span>
      </div>
      <p>{description}</p>
      <p><span className='bold'>From ${price}</span> / person</p>
    </div>
  );
}
