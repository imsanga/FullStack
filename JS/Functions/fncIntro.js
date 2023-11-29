function family(fm, fi) {
  let fmembers = fm,
    fincomePM = fi,
    fbudget = fi / 2;
  let savings = fincomePM - fbudget;
  console.log(
    `${fmembers} members, family income per month is ${fincomePM} & family budget to run the home per month is ${fbudget}. They should save ${savings}`
  );
}
let mCount = 5,
  fincome = 30000;
family(mCount, fincome);

//function declaration in variables
const savings = function (income, expense) {
  return income - expense;
};
console.log("Savings per month is ", savings(32000, 19000));
