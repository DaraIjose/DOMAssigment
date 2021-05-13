/* 1 */
document.getElementById("main-heading").innerHTML = "New DOM Layout";

document.getElementById("page-header").classList.add("bg-success");

/* 2 */
document.getElementById("para1").textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";

/* 3 */
document.getElementById("para2").textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

/* 4 */
    var btn = document.getElementById("btn")
    btn.onclick = function () {
        document.getElementById("para4").textContent = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
    }

/* 5 */
var red = document.getElementById("red");
red.onclick = function () {
    if (red.classList.contains("bg-white")) {
        red.classList.remove("bg-white")
        red.classList.add("bg-danger")
    } else {
        red.classList.remove("bg-danger")
        red.classList.add("bg-white")
    }
}
var blue = document.getElementById("blue");
blue.onclick = function () {
    if (blue.classList.contains("bg-white")) {
        blue.classList.remove("bg-white")
        blue.classList.add("bg-primary")
    } else {
        blue.classList.remove("bg-primary")
        blue.classList.add("bg-white")
    }
}

var yellow = document.getElementById("yellow");
yellow.onclick = function () {
    if (yellow.classList.contains("bg-white")) {
        yellow.classList.remove("bg-white")
        yellow.classList.add("bg-warning")
    } else {
        yellow.classList.remove("bg-warning")
        yellow.classList.add("bg-white")
    }
}

var green = document.getElementById("green");
green.onclick = function () {
    if (green.classList.contains("bg-white")) {
        green.classList.remove("bg-white")
        green.classList.add("bg-success")
    } else {
        green.classList.remove("bg-success")
        green.classList.add("bg-white")
    }
}

var black = document.getElementById("black");
black.onclick = function () {
    if (black.classList.contains("bg-white")) {
        black.classList.remove("bg-white")
        black.classList.add("bg-dark")
    } else {
        black.classList.remove("bg-dark")
        black.classList.add("bg-white")
    }
}





