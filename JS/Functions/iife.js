// iife - (immediately invoked function expressions)
// It executes immediately after its creation, without any fnc call

// using arrow fnc
((fname, lname) => {
  console.log(`${fname} ${lname}`);
})("sanga", "santha");

// using regular fncs
(function name() {
  let fname = "Sangameshwaran",
    lname = "Natarajan";
  console.log(`${fname} ${lname}`);
})();
