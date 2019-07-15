var content = document.getElementById("content");
var paragraph = document.createElement("p")
paragraph.append(document.createTextNode("New node"));
content.append(paragraph);
var paragraph2 = document.createElement("p")
paragraph2.append(document.createTextNode("Insert Before Node"));
content.insertBefore(paragraph2, paragraph);
document.getElementById("remove").remove();
content.replaceChild(document.createTextNode("Node replacement"), document.getElementById("replace"));