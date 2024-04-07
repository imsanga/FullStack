//It is a regular function used to create multiple similar objects(alternate of Class)
function AadharUserDetails(name) {
  this.name = name;
  this.aadharId = Math.random() + 100;
  this.userDetails = () => `Hi ${this.name}, your Aadhar is ${this.aadharId}`;
}

const user1 = new AadharUserDetails("Sangameshwaran");
console.log(user1.userDetails());

//example 2.0
function TataMotors(Modelname, customerName) {
  this.modelName = Modelname;
  this.customerName = customerName;
  this.customergreet = () => {
    console.log(
      `Congrats ${this.customerName}!, Welcome to Tata Family 'Urs life is Ours!'`
    );
  };
}

const cust1 = new TataMotors("RangeRover", "Sangameshwaran Natarajan");
cust1.customergreet();
