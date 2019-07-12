/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
document.querySelector("#bgrChangeBtn").addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});



/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
document.querySelector("#alertBtn").addEventListener("click", () => {
    alert("Thanks for visiting Bikes for Refugees!");

});



/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
document.querySelector("#addTextBtn").addEventListener("click", () => {
    var paragraph = document.createElement("p");
    var node = document.createTextNode("Read more below.");
    paragraph.appendChild(node);
    document.querySelector(".buttons").parentNode.appendChild(paragraph);
});



/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
document.querySelector("#largerLinksBtn").addEventListener("click", () => {
    var links = document.querySelectorAll("a").forEach((link) => link.style.fontSize = "3em");
});