import React from 'react';

function Input(props) {
    
    return (
        <input 
            onChange={props.handleChange}
            value={props.value}
            name={props.name}
            type={props.type} 
            placeholder={props.placeholder} 
        />
    );
};

export default Input;