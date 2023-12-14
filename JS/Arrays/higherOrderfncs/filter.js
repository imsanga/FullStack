// filter - takes each element from the array and calls the callbackfnc(same as forEach), but filter checks the given condition & returns a new array
// (element, index, array)

//Example_1
const age = [25, 56, 76, 89, 12, 14, 16, 92];
let ans = age.filter((value) => {
  return value > 18;
});
console.log(ans);

// combine(filter,map,foreach)
const usdtoinr = [25, 56, 76, 89, 12, 14, 16, 92];

usdtoinr
  .filter((usdollars) => usdollars > 20)
  .map((usdtoInr) => usdtoInr * 83)
  .forEach((inr) => console.log(inr));
