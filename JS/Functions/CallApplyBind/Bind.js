// function borrowing
// bindMethod - it doesn't invokes the fnc directly, whereas it creates a new fnc(copy) - which can be invoked later
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
