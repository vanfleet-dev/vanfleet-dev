import React from 'react';

function CardProp(props) {
    return <div className='cardDiv'>
        <h2>{props.name}</h2>
        <img src={props.img} />
        <p>{props.phone}</p>
        <p>{props.email}</p>
    </div>
};

export default CardProp;