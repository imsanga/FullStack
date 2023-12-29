document.body.style.backgroundColor = "black";

//Event Handlers
//onclick()
function boxClick() {
  console.log("boxClicked");
}
//onmouseover()
function mouseOver() {
  console.log("mouseOvered");
}

//EventListener
document
  .getElementById("box-3")
  .addEventListener("click", (event) => console.log("boxClicked", event));
