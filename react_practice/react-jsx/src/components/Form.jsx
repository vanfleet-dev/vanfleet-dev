import React, { useState } from '../../../note-app/node_modules/@types/react';

function Form() {

    const [userInput, setUserInput] = useState(''); // the default state is a blank string in this example.
    const [final, setFinal] = useState('');

    function handleChange(event) {  // the event from onChange is passed into the the function called when onChange occurs
        console.log(event.target.value)
        setUserInput(event.target.value); 
        // in the line above the value is accessed. in this case the value is the text in the input
        // the value 'event.target.value' is assigned to 'userInput'
        // to access that value in the event in other functions use 'userInput' because it is global
    }
    
    function handleClick() {
        setFinal(userInput)
    }

    return <div>
        <input
        onChange={handleChange} // onChange event creates an object called event that can be accessed. 
        type='text'
        placeholder='type here'
        value={userInput}  // to insure there is only one source of 'value' do this line when using state and events.
        />
        <button onClick={handleClick}>submit</button>
        <div>{userInput}</div>
        <div>{final}</div> 
    </div>
};

export default Form;