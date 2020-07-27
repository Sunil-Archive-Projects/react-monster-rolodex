import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set3&size=180x200`}></img>
        <h1>{props.monster.name}</h1>
        <h5>{props.monster.email}</h5>
    </div>
);