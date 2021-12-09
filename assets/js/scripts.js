// Is an inline comment 

/* This is a multiline comment 
in javascript. You gotta make sure that you add in the comments so that your future self will know what's going on in the code.
*/
var button = document.getElementById("enterBtn");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

})





