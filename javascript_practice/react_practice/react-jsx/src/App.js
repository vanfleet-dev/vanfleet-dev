import './style.css';

const number = 3;

const imgOne = "https://imgs.search.brave.com/8kpvcdgLd1R5CscP6_lt8WM5A0DE7SuIVXmQBTGcR4E/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/SlVUZmJvbUE1dU5o/VVQ3dFJ4QV9RSGFF/SyZwaWQ9QXBp"
const imgTwo = "https://imgs.search.brave.com/CK7pte98LFUeWfHDlwyyU0t6HsWBHv3Hkr8IXzVJNPQ/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/ei1nNzJ0Qzd5NlJG/dlpjTVZLRFVnSGFF/SyZwaWQ9QXBp"
const imgThree = "https://imgs.search.brave.com/s18VrzKJUHHlsNRNZ8LOqZ432LyXAQPazZrFKIKpBeg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/cjJrX1ZWVWU5ejlI/aVdjRmswVnFnSGFF/SyZwaWQ9QXBp"

function App() {
  return (
    <div className="App">
        {/* write normal html */}
        <h1>JSX Practice</h1>

        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>

        {/* interpolate javascript into html. value, expressions, interpolation, template literal. no statements */}
        <p>This is a number: {number} </p>
        <p>This is also a number: {Math.floor(Math.random() * 3)}</p> 
        <p>This is also a number: {`3${number}3`}</p>

        {/* classname needs to be className. all attributes need to be camelCase*/}
        <p className="notnum">This is not a number: Z</p>

        {/* another example of javascript interpolation with html */}
        <img src={imgOne} />
        <img src={imgTwo} />
        <img src={imgThree} />

        
    </div>
  );
}

export default App;
