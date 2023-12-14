// function borrowing
// applyMethod - It is used to invoke a fnc directly (same as callMethod) but it takes the arguments in the form of array
// Syntax: function.apply(thisArg, [arg1, arg2, ...])

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

personDetails.apply(personName1, ["Chennai", "Sydney"]);

let personName2 = {
  firstName: "Santhakumari",
  lastname: "Annamalai",
};

// Apply Method
personDetails.apply(personName2, ["Chennai", "Sydney"]);
