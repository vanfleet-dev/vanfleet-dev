import React, { useState } from 'react';

function Form() {

    const [userInput, setUserInput] = useState(''); // the default state is a blank string in this example.
    const [submit, userSubmit] = useState(false);

    function handleChange(event) {  // here the event from onChange is passed into the the function called when onChange occurs
        console.log(event.target.value)
        setUserInput(event.target.value); // the value is accessed. in this case the value is the text in the input
    }
    
    function handleOnClick() {
        userSubmit(true);
    }

    return <div>
        <input
        onChange={handleChange} // onChange event creates an object called event that can be accessed. 
        type='text'
        placeholder='type here'
        value={userInput}  // to insure there is only one source of 'value' do this line when using state and events.
        />
        <button onClick={handleOnClick}>submit</button>
        <div>{userInput}</div>
        <div>{submit ? userInput : null}</div> 
    </div>
};

export default Form;