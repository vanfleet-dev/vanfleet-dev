// getElementsByTagName returns an array of all items with the given tag ("li")
let lineItems = document.getElementsByTagName("li");
console.log(lineItems);

// getElementsByTagName access the 1st element in the array and set text color.
let lineItemOne = document.getElementsByTagName("li")[0].style.color = "#ffffb2";


// getElementsByTagName get a count of the total number of items inside the array.
let lineItemsArrLength = document.getElementsByTagName("li").length;
console.log(lineItemsArrLength);

// getElementsByClassName returns an array of all items with the given class ("list")
let lineItemsClass = document.getElementsByClassName("list");
console.log(lineItemsClass);

// getElementById returns a single element
let elementById = document.getElementById("space-shooter");
console.log(elementById);

// querySelector can take an element, class, or ID. 
// can take multiple inputs, use hierarchy, seperate with spaces.
// if multiple inputs for one element (tag & ID) no spaces between.

let queryById = document.querySelector("#space-shooter");
console.log(queryById); 

let queryByClass = document.querySelector(".list"); //only takes 1st element
console.log(queryByClass);

let queryByElement = document.querySelector("img"); //only takes 1st element
console.log(queryByElement);

let queryByHierarchy = document.querySelector("li img#ufo-swamp");
console.log(queryByHierarchy);

// querySelectorAll same as above but will return an array

let queryByClassAll = document.querySelectorAll(".list");
console.log(queryByClassAll);

// querySelectorAll same as above but will return an array

let queryByClassAllItemOne = document.querySelectorAll(".list")[1].style.color = "#ffffb2";
console.log(queryByClassAllItemOne);

//////////////////////////

// classList gives a list of classes for the specified element

let queryClassList = document.querySelector("h1").classList;
console.log(queryClassList);

// .add / .remove can add / remove a new property to an existing element. added to the method as see below. 

let queryClassAdd = document.querySelector("h1").classList.add("invis");
console.log(queryClassAdd);

let queryClassRemove = document.querySelector("h1").classList.remove("invis");
console.log(queryClassRemove);

// .toggle toggle a property on or off.

// let queryClassToggle = document.querySelector("h1").classList.toggle("invis");
// console.log(queryClassToggle);


// make a secret message revealed with a secret button. 

document.querySelector(".btn").onclick = function() {secretMessage()};

function secretMessage () {
    document.querySelector(".secret-message").classList.toggle("invis");
}

// .innerHTML returns all html elements inside of the target element.

let innerHtml = document.querySelector(".line-item-one").innerHTML;
console.log(innerHtml);


// gallery with buttons for each image. image is switched using .innerHTML

document.querySelector(".button-one").addEventListener("click", gallery0);

function gallery0 () {
    document.querySelector(".gallery-switch").innerHTML = "<img class='gallery-1' src='./images/isleward.gif' />";
}

document.querySelector(".button-two").addEventListener("click", gallery1);

function gallery1 () {
    document.querySelector(".gallery-switch").innerHTML = "<img class='gallery-1' src='./images/space_shooter.gif' />";
}

document.querySelector(".button-three").addEventListener("click", gallery2);

function gallery2 () {
    document.querySelector(".gallery-switch").innerHTML = "<img class='gallery-1' src='./images/ufo_swamp_odyssey.gif' />";
}


// .getAttribute .setAttribute 

let getAttribute = document.querySelector("#isleward").getAttribute("src");
console.log(getAttribute);

let setAttribute = document.querySelector("#isleward").setAttribute("src", "./images/isleward_alt.gif");