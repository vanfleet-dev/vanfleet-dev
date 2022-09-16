// getElementsByTagName returns an array of all items with the given tag ("li")
let lineItems = document.getElementsByTagName("li");
console.log(lineItems);

// getElementsByTagName access the 1st element in the array and set text color.
let lineItemOne = document.getElementsByTagName("li")[0].style.color = "#ffffb2";
