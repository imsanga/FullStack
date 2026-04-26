//callbackFnc - function passed as an argument to another fnc
//Example_1
function multiply(n1, n2) {
  return n1 * n2;
}
function add(n1, n2) {
  return n1 + n2;
}
function sum(callback1, callback2) {
  return callback1(4, 7) + callback2(3, 2);
}
console.log(sum(multiply, add));

// //Example_2
// function greet(greetings) {
//   console.log(greetings);
// }

// function callback(callback) {
//   callback("Come On Man, You can do it!!!");
// }

// callback(greet);
