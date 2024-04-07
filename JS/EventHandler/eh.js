document.body.style.backgroundColor = "black";

//Note: we can have multiple event listeners for an event, whereas we can have only one event handler for an event.

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
