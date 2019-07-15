var h1 = document.getElementById("title");
var title = h1.firstChild;
console.log(title.nodeValue);
title.nodeValue = "New title";
console.log(h1.getAttribute("id"));
h1.setAttribute("id", "new-title");