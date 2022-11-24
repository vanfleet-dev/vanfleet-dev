import React, { useState } from 'react';

function Form2() {

    const [allData, setAllData] = useState({
        userInput1: '',
        userInput2: ''
    });

    const [final, setFinal] = useState({
        userInput1: '',
        userInput2: ''
    });

    function handleChange(event) {
        const newValue = event.target.value;
        const currentValue = event.target.name;

        setAllData((prevValue) => {
            if (currentValue === 'userInput1') {
                return {
                    userInput1: newValue,
                    userInput2: prevValue.userInput2
                }
            } else if (currentValue === 'userInput2') {
                return {
                    userInput1: prevValue.userInput1,
                    userInput2: newValue
                }
            }
        });
    }

    function handleOnClick() {
        setFinal(allData)
    }

    return <div>
        <input
        name='userInput1' 
        onChange={handleChange}
        type='text'
        placeholder='type here 1'
        value={allData.userInput1}
        />
        <input
        name='userInput2'
        onChange={handleChange}
        type='text'
        placeholder='type here 2'
        value={allData.userInput2}
        />
        <button onClick={handleOnClick}>submit</button>
        <div>{allData.userInput1}{allData.userInput2}</div>
        <div>{final.userInput1}{final.userInput2}</div>
    </div>
};

export default Form2;