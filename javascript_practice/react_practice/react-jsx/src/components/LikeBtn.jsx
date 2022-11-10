import React, { useState } from 'react'; // syntax for bringing in a 'non standard' module

function LikeBtn() {
    const [count, setCount] = useState(0); 
    // useState is an array with a value at position 0 and a function at position 1
    // the value starts as the value passed, in this case 0.
    // to access these two properties 'destructuring' is used. 
    // [count, setCount] count becomes a variable for the value at array position 0
    // [count, setCount] setCount becomes the name of the function at array position 1
    //below count and setCount are used to increment and decrement the value.
    console.log(count);

    function decrease() {
        setCount(count - 1);
    }

    function increase() {
        setCount(count + 1);
    }

    return <div>
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </div>

};

export default LikeBtn;