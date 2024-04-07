// selecting body tag
const myBody = document.body;
myBody.style.backgroundColor = "black";
console.log(myBody);

// selecting box by Id
const box2 = document.getElementById("box-2");
console.log(box2);

// selecting div by TagName
const div = document.getElementsByTagName("div");
console.log(div);

// selecting div by TagName
const box = document.getElementsByClassName("box");
console.log(box);

// selecting div by querySelector(querySelector only returns the first element that matches the selector. To select multiple elements, you can use querySelectorAll)
const random = document.querySelectorAll(".box");
console.log(random);

// Modifying HTML

// changing html content using inerHTML
const box1 = document.getElementById("box-1");
box1.innerHTML = "Hello World!";
box1.innerHTML = "<h3>Hello World!</h3>";
document.getElementById("box-1").innerHTML = "Sanga";
document.getElementById("box-1").style.backgroundColor = "blue";

//modifying class in HTML
const box1 = document.getElementById("box-1");
box1.classList.add("roundBorder");

//creating & appending HTML
const newPara = document.createElement("p");
document.getElementById("g").appendChild(newPara).innerHTML =
  "<h1>MadrasMonkeys</h1>";
