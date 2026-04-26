//factoryfunc - It is a fnc that returns object

// Example:1.0
function personDetails1(name, fname, mname, sex, age) {
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

let details1 = personDetails1(
  "Sangameshwaran N",
  "Natarajan K",
  "Santhakumari A",
  "Male",
  23
);
console.log(details1.fullDetails());
console.log(details1.name);

// Example:1.1
function personDetails2(name, fname, mname, sex, age) {
  return {
    name,
    fname,
    mname,
    sex,
    age,
    fullDetails() {
      return `${this.name} his/her Father Name is ${this.fname} & Mother Name ${this.mname}, a ${this.sex} canditate who is ${this.age} years of age.`;
    },
  };
}

let details2 = personDetails2(
  "Sangameshwaran N",
  "Natarajan K",
  "Santhakumari A",
  "Male",
  23
);
console.log(details2.fullDetails());
console.log(details2.name);

// Example:2
function country() {
  return {
    country: "India",
    state: "TamilNadu",
    city: "Madras",
    stats() {
      return `I am residing in country: ${this.country}, state: ${this.state}, city: ${this.state}`;
    },
  };
}

const staty = country();
console.log(staty.stats());
