import React from 'react';
import './Card.css';

const Card = ({ name, stance, obstacle, tutorial, id, deleteTrick }) => {
  return (
    <div className='card'>
      <p>{stance} {name}</p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to tutorial:</p>
      <a href={tutorial}>{tutorial}</a>
      <button className='delete-it' onClick={() => deleteTrick(id)} >Delete It!</button>
    </div>
  )

}

export default Card;