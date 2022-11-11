import React, { useState } from 'react';



function Time() {

    //time and button

    let time = new Date().toLocaleTimeString();

    let [timeState, setTime] = useState(time);

    function newTime() {
        let getTime = new Date().toLocaleTimeString();
        setTime(getTime);
    };

    setInterval(newTime, 1000);

    // event

    const [isMousedOver, setMouseOver] = useState(false);

    function handleMouseOver() {
        setMouseOver(true);
    };

    function handleMouseOut() {
        setMouseOver(false);
    };

    return <div>
        <h1>{timeState}</h1>
        <button 
            style={{ backgroundColor: isMousedOver ? 'black' : 'white' }} 
            //ternary expression used to get a value for an inline style change. 
            //backgroundColor: black or white
            // the boolean is isMousedOver
            onClick={newTime}
            onMouseOver={handleMouseOver} // event onMouseOver
            onMouseOut={handleMouseOut} // event onMouseOut
            >
            GET TIME
            </button>

            
    </div>
};

export default Time;