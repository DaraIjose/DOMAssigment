/* 1 */
document.getElementById("main-heading").innerHTML = "New DOM Layout";

document.getElementById("page-header").classList.add("bg-success");

/* 2 */
document.getElementById("para1").textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";

/* 3 */
document.getElementById("para2").textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

/* 4 */
document.getElementById("btn").onclick = function() {myFunction()};

function myFunction () {
    document.createElement("p").textContent = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
}

/* 5 */
