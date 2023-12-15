// Class - It acts as an template or blueprint for an object
// Object - "n" no of objects can be created from a class. We can access methods inside a class using objects
// Constructor - It is an method of a class, which gets invoked(automatically) immediately after the object is created

class User {
  constructor(userName, ecommerceSite) {
    this.userName = userName;
    this.ecommerceSite = ecommerceSite;
    this.greet = "Have a good day folks";
  }
  login() {
    console.log(
      `Hi ${this.userName}, enjoy your shopping in ${this.ecommerceSite}!!! & ${this.greet}`
    );
  }
}

const user1 = new User("Sangameshwaran", "Flipkart");
const user2 = new User("Santhakumari", "Amazon");
const user3 = new User("Natarajan", "Tata Neu");

user1.login();
user2.login();
user3.login();
