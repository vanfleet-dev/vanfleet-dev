// import

import data from './data.js' // import example, imports the data saved in an array as an object for use in this js file. 
import pi, {doublePi, triplePi} from './pi.js' // multi import. this example imported the 'default' (pi), as well as two other values from the same js file.
import * as pi2 from './pi.js' // import everything from the target js file.
import animals from './data1.js'

function dataImport(data) { // access and use a value from the imported data
    console.log(data);
    document.querySelector('.importedData').innerHTML = `id: ${data[0].id}`
}

dataImport(data);

function piMultiImport1(piImport) { //use the imported 'default' from multi import
    console.log(piImport);
    document.querySelector('.importedPi1').innerHTML = `pi: ${piImport}` 
}

piMultiImport1(pi);

function piMultiImport2(piImport) { // use one of the two additional imports from multi import
    console.log(piImport);
    document.querySelector('.importedPi2').innerHTML = `double pi: ${piImport}`
}

piMultiImport2(doublePi());

function piMultiImport3(piObject) { // use the imports from 'pi2', the values imported from pi.js are stored in an object.
    console.log(piObject.triplePi());
    document.querySelector('.importedPi3').innerHTML = `pi: ${piObject.default} doublePi: ${piObject.doublePi()}  triplePi: ${piObject.triplePi()}`
}

piMultiImport3(pi2);


// .map 1 loops through all data but does not filter it.

function mapData(data) { // .map will loop through an array of objects so each objects data can be used. 
    data.map(useData)
};

function useData(mappedData) {  // example of the .map looping through the function below and the id number of each object being used during each loop.
    if(mappedData.id === 1) {
        document.querySelector('.mappedData1').innerHTML = `id: ${mappedData.id}`
    };
        if(mappedData.id === 2) {
        document.querySelector('.mappedData2').innerHTML = `id: ${mappedData.id}`
    };
        if(mappedData.id === 3) {
        document.querySelector('.mappedData3').innerHTML = `id: ${mappedData.id}`
    };
}

mapData(data);

// .map 2

const numbers1 = [1, 2, 3];

numbers1.map(multiply);

function multiply(mappedNumber) { //the if statements display each number as .map loops
    if(mappedNumber === 1) { 
        document.querySelector('.mappedNumber1').innerHTML = `${mappedNumber} * 2: ${mappedNumber * 2}`; 
    };
    if(mappedNumber === 2) {
        document.querySelector('.mappedNumber2').innerHTML = `${mappedNumber} * 2: ${mappedNumber * 2}`;
    };
    if(mappedNumber === 3) {
        document.querySelector('.mappedNumber3').innerHTML = `${mappedNumber} * 2: ${mappedNumber * 2}`;
    };

}

// .map 3 

const numbers2 = [2, 4, 6];

function double(mappedNumber) {
    return mappedNumber * 2; //returning each number that is sent through the loop multiplied by 2.
}

const newNumbers = numbers2.map(double) // this calls .map && stores each number sent through the loop of the line above into a new array.

function displayNewNumbers() { // displays the results of the new array made in the line above.
    console.log(newNumbers);
    document.querySelector('.newNumbers').innerHTML = `${newNumbers[0]} ${newNumbers[1]} ${newNumbers[2]}`;
}

displayNewNumbers();

// .filter 1 finds only cases that resolve to true

const numbers3 = [2, 4, 6];

const filteredNumbers = numbers3.filter(function(num) {
    return num % 2 === 0;
});

function displayFilteredNumbers() {
    console.log(filteredNumbers);
    document.querySelector('.filteredNumbers').innerHTML = `${filteredNumbers[0]} ${filteredNumbers[1]} ${filteredNumbers[2]}`;
};

displayFilteredNumbers();


// .reduce 1 adds all together

const numbers4 = [2, 4, 6];

const reducedNumber = numbers4.reduce(function(add, num){
    return add + num;
});

function displayReducedNumber() {
    console.log(reducedNumber);
    document.querySelector('.reducedNumber').innerHTML = `${reducedNumber}`
};

displayReducedNumber();

// .find 1 finds the 1st matching case and returns the value.

const numbers5 = [2, 4 ,6];

const findNumber = numbers5.find(function(num) {
    return num < 10;
});

function displayFindNumber() {
    console.log(findNumber);
    document.querySelector('.findNumber').innerHTML = `${findNumber}`
};

displayFindNumber();

// .findIndex finds the 1st matching case and returns the index of the value.

const numbers6 = [2, 4 ,6];

const indexOfNumber = numbers6.findIndex(function(num) {
    return num < 10;
});

function displayIndexOfNumber() {
    console.log(indexOfNumber);
    document.querySelector('.indexOfNumber').innerHTML = `${indexOfNumber}`
};

displayIndexOfNumber();

// arrow functions

const numbers7 = [2, 4 ,6];

const smallArrowFunction = numbers7.map( num => num * num); // smallest arrow function. 
// IF only one argument then no () around the argument. 
// IF the return is a simple expression then the return can be left out. 

const arrowFunction = numbers7.map((num) => { // arrow function
    return num * num;
}); 

const anonFunction = numbers7.map(function(num) { // anonymous function
    return num * num;
});


// destructuring 

const [cat, dog] = animals;  // in array any name because it is a new variable
// in this example cat === animals[0] 

// const {name, sound} = cat; // names must match the keys you are accessing
// in this example name === animals[0].name

// const { name: catName, sound: catSound } = cat; // you can rename with this syntax

// const {name = 'fluffy', sound = 'purr'} = cat; // you can use this syntax to provide a default.
// in case the data has a missing value, the default will be provided and prevent errors. 

const {name, sound, feeding: {food, water} } = cat; //this syntax and the syntax below achieve the same result for feeding.

//const {food, water} = feeding;

console.log(food);