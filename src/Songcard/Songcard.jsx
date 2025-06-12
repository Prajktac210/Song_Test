import React from 'react';
import './Songcard.css';

const Songcard = ({ info }) => {
  return (
    <div className="main-card">
      <div className="card">
        <img src={info.poster} alt={info.name || 'Song Poster'} />
      </div>
    
       <span> {info.name} </span>
    </div>
  );
};

export default Songcard;
