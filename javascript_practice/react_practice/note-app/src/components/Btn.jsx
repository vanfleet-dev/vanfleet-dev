import React from 'react';

function Btn(props) { // Btn has no unique code. everything that is of the button is passed down to Btn from where it is used. 

    return <button type={props.type} onClick={props.handleClick}>{props.btnText}</button>;
}

export default Btn;