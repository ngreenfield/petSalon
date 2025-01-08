console.log("Welcome to jQuery");

//JS vs jQuery
//getting an element
document.getElementById("results");
$("#results");

document.getElementsByTagName("p");
$("p");

document.getElementsByClassName("with-border");
$(".with-border");

// ID SELECTORS
let redParagraph = $("#red").css("background", "red").css("color", "white");
console.log("my red paragraph", redParagraph);

let blueParagraph = $("#blue").css("background", "blue").css("color", "white");
console.log("my blue paragraph", blueParagraph)

// CLASS SELECTORS
let myParagraphWithBorder = $(".with-border");

myParagraphWithBorder.css("border", "5px dashed yellow");

myParagraphWithBorder.click(function(){
    console.log("Clicked");
    $(this).addClass("bg-gray");
});

//TAG SELECTORS
let paragraphs = $("p");

paragraphs.css("cursor", "pointer");

//SIMPLE AND COMMON FUNCTIONS
function register(){
    let testEntry = $("#testInput").val();//get and store info
    $("#results").append(`<li>${testEntry}</li>`); //display the info
}

//EVENTS
$("#registerBtn").on('click', register);

//SIMPLE AND COMMON FUNCTION
function clickMe(){
    console.log("Click me");

    $("p:first").hide();
    //$("p:first").show();
    $("p:last").css("border", "3px solid black")
}

$("#newBtn").on("click", clickMe);


function hideName(){
    $("#user-name").slideUp(2000);
}
$("#hideUser").on("click", hideName);

function showName(){
    $("#user-name").slideDown(2000);
}
$("#showUser").on("click", showName);


