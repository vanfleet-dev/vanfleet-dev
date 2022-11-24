import React from '../../../note-app/node_modules/@types/react';

function CardMaker(props) {
    return <div className='cardDiv'>
        <p>{props.id}</p>
        <h2>{props.user}</h2>
        <img src={props.img} />
        <p>{props.phone}</p>
        <p>{props.email}</p>
    </div>
};

export default CardMaker;