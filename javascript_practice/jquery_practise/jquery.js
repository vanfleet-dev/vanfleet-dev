$("h1").css("color", "#d7B550"); // sets property

console.log($("h1").css("color")); // gets property

$("h1").addClass("big-title"); // add & remove class

$("h1").removeClass("big-title");

$("h1").addClass("big-title margin-5"); // add & remove mutiples

$("h1").removeClass("big-title margin-5"); 

console.log($("h1").hasClass("margin-5")); // query to see if an element has a class

$("h1").text("BYE"); // change text of an element

$("button").text("DO NOT TOUCH"); // change the text for multiple elements. any that have the target class

$("div").html("<p>WE WANT YOU!</p>").css("color", "#d7B550"); // change the inner html

console.log($("div").html());

console.log($("img-val").attr("src")); // get the value of an attribute

$(".img-val").attr("src", "./images/isleward_alt.gif"); // set the value of an attribute

$("h1").addClass("big-title margin-5"); // add & remove values to class attribute & console log the values with .attr

$("h1").removeClass("big-title margin-5");

console.log($("h1").attr("class")); 

$("h1").on("click", function(){ // event listener syntax .on

    if($("h1").css("font-size") <= "3rem") {
        $("h1").css("font-size", "4rem");
    } else if ($("h1").css("font-size") >= "3rem") {
        $("h1").css("font-size", "2rem");
    }
})


$("button").on("click", function() { // no need for a for loop
    $("button").css("font-size", "1rem").css("background-color", "#d7B550").css("color", "#d7B550")
})


$(document).on("keypress", function(event){ // event listener keypress
    if (event.key === "w") {
        $("body").html("<p>GAME OVER<p/>").css("color", "#d7B550").css("font-size", "9rem");
    }
});

$("button").on("click", function () {  // animations
    $(".img-val").fadeOut();
});

$("button").on("click", function () { 
    $(".img-one").hide();
});

$("button").on("click", function () { 
    $(".img-two").fadeToggle();
});

$("button").on("click", function () { 
    $(".img-three").slideToggle();
});