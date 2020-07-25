import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        { console.log(props) }
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set1&size=180x200`}></img>
        <h1>{props.monster.name}</h1>
        <h3>{props.monster.email}</h3>
    </div>
);