import React from 'react'; // import React for all components

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

function Seasons() { //the function to be used as the component needs to be capitalized 'Seasons'. All JSX needs to be in one <div>
  return  <div>
            <p>The season is shown in a festive color below</p>
            <p>KEY:</p>
            <p className='winter'>winters</p>
            <p className='spring'>spring</p>
            <p className='summer'>summer</p>
            <p className='fall'>fall</p>
            <p style={seasonStyle}>{season.toUpperCase()}</p>
  </div>
};

export default Seasons;