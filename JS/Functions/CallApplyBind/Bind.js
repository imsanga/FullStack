// function borrowing
// bindMethod - it binds the fnc with the object and returns a new fnc which can be invoked later.
// Syntax: function.bind(thisArg, arg1, arg2, ...)

let personName1 = {
  firstName: "Sangameshwaran",
  lastname: "Natarajan",
};

let personDetails = function (hometown, settledtown) {
  console.log(
    this.firstName +
      " " +
      this.lastname +
      ", hometown is " +
      hometown +
      ", settledtown is " +
      settledtown
  );
};

let pdetails1 = personDetails.bind(personName1, "Chennai", "Sydney");

pdetails1();

let personName2 = {
  firstName: "Santhakumari",
  lastname: "Annamalai",
};

// Bind Method
let pdetails2 = personDetails.bind(personName2, "Chennai", "Sydney");

console.log(pdetails2);
pdetails2();
