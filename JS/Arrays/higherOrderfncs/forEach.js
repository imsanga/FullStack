//foreach - takes each element from the array and calls the callbackfnc
// (element, index, array)

//with arrow functions
// Example_1
let arr1 = [5, 4, 6, 7, 8, 9];
arr1.forEach((element, index, arr) => {
  console.log(element, index, arr);
});

//Example_2
let arr = [9, 8, 7, 6, 5];
arr.forEach((element, index, array) => console.log(element, index, array));

//without arrow functions
let arr2 = [5, 4, 6, 7, 8, 9];
arr2.forEach(callback);

function callback(element, index, arr) {
  console.log(element, index, arr);
}
