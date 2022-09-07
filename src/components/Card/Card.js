import React from 'react';
import './Card.css';

const Card = ({ name, stance, obstacle, tutorial, id }) => {
  return (
    <div className='card'>
      <p>{name}</p>
      <p>Obstacle: {obstacle}</p>
      <a href={tutorial}>Link to tutorial video</a>
    </div>
  )

}

export default Card;