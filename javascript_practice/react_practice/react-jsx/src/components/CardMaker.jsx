import React from 'react';

function CardMaker(props) {
    return <div className='cardDiv'>
        <h2>{props.user}</h2>
        <img src={props.img} />
        <p>{props.phone}</p>
        <p>{props.email}</p>
    </div>
};

export default CardMaker;