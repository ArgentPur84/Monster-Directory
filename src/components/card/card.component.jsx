import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className= 'card-container'>
        <img alt="monster" src= {`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <h2> {props.monster.name} </h2>
        <div>{props.monster.phone}</div>
        <div>  {props.monster.email}</div>
        <div> { props.monster.company.catchPhrase }</div>
    </div>
)