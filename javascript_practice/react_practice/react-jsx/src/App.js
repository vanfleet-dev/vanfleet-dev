import './style.css';
import Seasons from './components/Seasons'; // import component used on line 92
import PI, {doublePi, triplePi} from './components/Pi.jsx'; // multi import from component used on line 94
import * as pi2 from './components/Pi.jsx'; // multi import form component use on line 98 

const number = 3;

const imgOne = "https://imgs.search.brave.com/8kpvcdgLd1R5CscP6_lt8WM5A0DE7SuIVXmQBTGcR4E/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/SlVUZmJvbUE1dU5o/VVQ3dFJ4QV9RSGFF/SyZwaWQ9QXBp"
const imgTwo = "https://imgs.search.brave.com/CK7pte98LFUeWfHDlwyyU0t6HsWBHv3Hkr8IXzVJNPQ/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/ei1nNzJ0Qzd5NlJG/dlpjTVZLRFVnSGFF/SyZwaWQ9QXBp"
const imgThree = "https://imgs.search.brave.com/s18VrzKJUHHlsNRNZ8LOqZ432LyXAQPazZrFKIKpBeg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/cjJrX1ZWVWU5ejlI/aVdjRmswVnFnSGFF/SyZwaWQ9QXBp"

const inlineStyle = { // object used for inline styling
  color: '#cbc94b',
  fontSize: '10px'
}

inlineStyle.color = '#cb7a4b'; // objects can be modified 

const today = new Date();
const month = today.getMonth();
const seasonStyle = {
  color: '',
  fontSize: '30px'
}

function pickSeason (month) {
  console.log(month);
  if(month === 12 || month === 1 || month === 2) {
    seasonStyle.color = '#4b9acb'
    return 'winter';
  } 
   
  if (month === 3 || month === 4 || month === 5) {
    seasonStyle.color = '#afed59'
    return 'spring';
  } 
  
  if (month === 6 || month === 7 || month === 8) {
    seasonStyle.color = '#f1ee3b'
    return 'summer';
  }
  
  if (month === 9 || month === 10 || month === 11) {
    seasonStyle.color = '#d16b30'
    return 'fall';
  }
}

let season = pickSeason(month);

console.log(season);

function App() {
  return (
    <div className='App'>

        {/* write normal html */}
        <h1>JSX Practice</h1>

        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>

        {/* JSX: interpolate javascript into html. value, expressions, interpolation, template literal. no statements */}
        <p>This is a number: {number} </p>
        <p>This is also a number: {Math.floor(Math.random() * 3)}</p> 
        <p>This is also a number: {`3${number}3`}</p>

        {/* classname needs to be className. all attributes need to be camelCase */}
        <p className='notnum'>This is not a number: Z</p>

        {/* another example of javascript interpolation with html */}
        <img src={imgOne} />
        <img src={imgTwo} />
        <img src={imgThree} />

        {/* interpolate an object as CSS styling */}
        <p style={inlineStyle}>This was styled with inline styling</p>

        {/* practice */}
        <p>The season is shown in a festive color below</p>
        <p>KEY:</p>
        <p className='winter'>winters</p>
        <p className='spring'>spring</p>
        <p className='summer'>summer</p>
        <p className='fall'>fall</p>
        <p style={seasonStyle}>{season.toUpperCase()}</p>

        {/* The code above converted to a component  */}
        <Seasons />

        {/* multi import example. in this example each import is added "independently" */}
        <p>{PI} / {doublePi()} / {triplePi()}</p>

        {/* multi import example 2. in this example all imports from the target component are added into an object */}
        <p>{pi2.default} / {pi2.doublePi()} / {pi2.triplePi()}</p>

    </div>
  );
}

export default App;
