//It is a regular function used to create multiple similar objects(alternate of Class)
function AadharUserDetails(name) {
  this.name = name;
  this.aadharId = Math.random() + 100;
  this.userDetails = () => `Hi ${this.name}, your Aadhar is ${this.aadharId}`;
}

const user1 = new AadharUserDetails("Sangameshwaran");
console.log(user1.userDetails());
