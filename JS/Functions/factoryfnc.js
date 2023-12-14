//factoryfunc - It is a fnc that returns object
// Example:1.0
function personDetails(name, fname, mname, sex, age) {
  return {
    name: name,
    fatherName: fname,
    motherName: mname,
    gender: sex,
    age: age,
    fullDetails() {
      return `${this.name} his/her Father Name is ${this.fatherName} & Mother Name ${this.motherName}, a ${this.gender} canditate who is ${this.age} years of age.`;
    },
  };
}

let details = personDetails(
  "Sangameshwaran N",
  "Natarajan K",
  "Santhakumari A",
  "Male",
  22
);
console.log(details.fullDetails());
console.log(details.name);

// // Example:1.1
// function personDetails(name, fname, mname, sex, age) {
//   return {
//     name,
//     fname,
//     mname,
//     sex,
//     age,
//     fullDetails() {
//       return `${this.name} his/her Father Name is ${this.fname} & Mother Name ${this.mname}, a ${this.sex} canditate who is ${this.age} years of age.`;
//     },
//   };
// }

// let details = personDetails(
//   "Sangameshwaran N",
//   "Natarajan K",
//   "Santhakumari A",
//   "Male",
//   22
// );
// console.log(details.fullDetails());
// console.log(details.name);

// Example:2
function country() {
  return {
    country: "India",
    state: "TamilNadu",
    city: "Madras",
    cststci() {
      return `I am residing in country: ${this.country}, state: ${this.state}, city: ${this.state}`;
    },
  };
}

const stat1 = country();
console.log(stat1.cststci());
