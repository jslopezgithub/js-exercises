traverseNode(document.getElementById("page"));

function traverseNode(node) {
    console.log("firstChild: " + node.firstChild);
    console.log("lastChild: " + node.lastChild);
    console.log("nextSibling: " + node.nextSibling);
    console.log("previous: " + node.previousSibling);
    console.log("parent: " + node.parentNode);
    console.log("child: " + node.childNodes);
}
