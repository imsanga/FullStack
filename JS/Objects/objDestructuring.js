// ObjectDestructuring - It assigns Objects->property(key) as an variable, so that we can access the objects value without using dot notation

// #example_1
const personDetails1 = {
  name: "Sangameshwaran",
  fatherName: "Natarajan",
  motherName: "Santhakumari",
  Gender: "Male",
  Age: 23,
};

const { name, fatherName, motherName, Gender, Age } = personDetails1;
console.log(Age);

// #example_2: Destructuring Objects method by call method
const personDetails2 = {
  name: "Sangameshwaran N",
  fatherName: "Natarajan K",
  motherName: "Santhakumari A",
  Gender: "Male",
  Age: 23,
  fullDetails() {
    console.log(`Name: ${this.name}, Age: ${this.Age}`);
  },
};

const { fullDetails } = personDetails2;
fullDetails.call(personDetails2);
