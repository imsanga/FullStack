// reduce - takes each element from the array and calls the callbackfnc(same as forEach), but reduce performs the given operations, accumulates it in(previous_value) and returns a accumulated result
// ((previous_value(default:0), current_value, index, array), initialvalue)

//Example_1
const donations = [1, 2, 3, 4, 5];
let ans = donations.reduce(
  (previousvalue, presentvalue) => previousvalue + presentvalue,
  5
);
console.log(ans);

// combine(filter,map,reduce)
const usdtoinr = [25, 56, 76, 89, 12, 14, 16, 92];

let output = usdtoinr
  .filter((usdollars) => usdollars > 20)
  .map((usdtoInr) => usdtoInr * 83)
  .reduce((pv, cv) => pv + cv, 1);

console.log(output);
