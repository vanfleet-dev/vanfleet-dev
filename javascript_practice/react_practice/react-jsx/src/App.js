import './style.css';
import Seasons from './components/Seasons'; // import component used on line 92
import PI, {doublePi, triplePi} from './pi.js'; // multi import from js file used on line 94
import * as pi2 from './pi.js'; // multi import from js file used on line 98 
import Card from './components/Card';
import CardProp from './components/CardProp';
import CardProp2 from './components/CardProp2';
import contacts from './contacts.js';
import CardMaker from './components/CardMaker';
import LikeBtn from './components/LikeBtn';

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

function createCard(contact) { // contact holds each object as .map loops though the array in contacts.js
  return <CardMaker
    key={contact.id}
    id={contact.id} // key must be a unique value that all the objects being mapped contain. for instance an id number.
    user={contact.user} // 'user' is now accessed and used by CardMaker as a prop. See CardMaker.jsx
    img={contact.img}
    phone={contact.phone}
    email={contact.email}
  />
}

const ternaryOperator = true; // used as a boolean (true or false) input for the ternary operator example.
const andOperator = 1;

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

        {/* hardcoded component. The data inside cannot be easily modified */}
        <Card />

        {/* example of the same component using props (properties). this one being easily editable */}
        <CardProp 
          name='NAME' 
          phone='8675309' 
          email='email@email.email' 
          img='https://imgs.search.brave.com/8kpvcdgLd1R5CscP6_lt8WM5A0DE7SuIVXmQBTGcR4E/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/SlVUZmJvbUE1dU5o/VVQ3dFJ4QV9RSGFF/SyZwaWQ9QXBp'
        />
        
        {/* this example shows data being taken from an array in contacts.js, then passed to a component (CardProp2). */}
        <CardProp2 
          user={contacts[0].user}
          img={contacts[0].img}
          phone={contacts[0].phone}
          email={contacts[0].email}
        />

        {/* .map will loop through an array of objects so each objects data can be used.*/}
        {contacts.map(createCard)}

        {/* ternary operator, what renders is based on the state of the boolean. 
        1st is a boolean variable being checked for true or false
        2nd the ? is checking is the boolean is true
        3rd the '<Seasons />' is in the 'true' position. this can take any input
        4th the : is equal to || 
        5th the 'contacts.map(createCard)' is in the false position
        */}
        {ternaryOperator ? <Seasons /> : contacts.map(createCard)}

        {/* this will only display is the boolean is true */}
        {ternaryOperator ? <Seasons /> : null}

        {/* && operator if the expression is true then the code following the && is run */}
        {andOperator < 2 && <Seasons />}

        {/* hooks useState destructuring, see <LikeBtn /> for notes*/}
        <LikeBtn />

    </div>
  );
}

export default App;
