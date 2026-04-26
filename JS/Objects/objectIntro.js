const personDetails = {
  name: "Sangameshwaran N",
  fatherName: "Natarajan K",
  motherName: "Santhakumari N",
  Gender: "Male",
  Age: 22,
  fullDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Father Name: ${this.fatherName}`);
    console.log(`Mother Name: ${this.motherName}`);
    console.log(`Gender: ${this.Gender}`);
    console.log(`Age: ${this.Age}`);
  },
  fullD: {
    name: "Sangameshwaran N",
    fatherName: "Natarajan K",
    motherName: "Santhakumari N",
    Gender: "Male",
    Age: 22,
  },
};

personDetails.fullDetails();
console.log(personDetails.fullD.Age);

/*const car = {
    name: "mahindra",
    model: "XUV700",
    price: 2700000,
    onroadPrice() {
        console.log(`${this.name} ${this.model} onroad price is ${this.price}`);
    },
};

car.onroadPrice();*/
