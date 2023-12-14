// closure - inner fnc binds the outer fnc variable

//Example_1
function addvar1(x) {
  function addvar2(y) {
    return x + y;
  }
  return addvar2;
}

let add1000 = addvar1(1000);
console.log(add1000(500));

let add2000 = addvar1(2000);
console.log(add2000(500));

console.log(add1000(850));

// //Example_2
function sumofNo1(x) {
  return function sumofNo2(y) {
    return x + y;
  };
}

let add5 = sumofNo1(5);
console.log(add5(2));

let add10 = sumofNo1(10);
console.log(add10(6));

console.log(add5(12));
