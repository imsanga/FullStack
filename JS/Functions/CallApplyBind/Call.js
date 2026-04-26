// function borrowing
// call, apply, and bind methods - it allows a function to access object properties by setting the this context to that object.
// callMethod - It is used to invoke a fnc directly
// Syntax: function.call(thisArg, arg1, arg2, ...)

let personName1 = {
  firstName: "Sangameshwaran",
  lastname: "Natarajan",
};

function personDetails(hometown, settledtown) {
  console.log(
    this.firstName +
      " " +
      this.lastname +
      ", hometown is " +
      hometown +
      ", settledtown is " +
      settledtown
  );
}

personDetails.call(personName1, "Chennai, Tamilnadu", "Sydney, Australia");

let personName2 = {
  firstName: "Santhakumari",
  lastname: "Annamalai",
};

// Call Method
personDetails.call(personName2, "Chennai, TamilNadu", "Sydney, Australia");
