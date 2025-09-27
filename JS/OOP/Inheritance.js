//Inheritance - the child(derived) class is inherited from the parent(base) class
//Super keyword - it is used to invoke constructor & methods from a parent class
class User {
  static noOfUsersVisited = 0;
  constructor(userName, ecommerceSite) {
    this.userName = userName;
    this.ecommerceSite = ecommerceSite;
    User.noOfUsersVisited++;
  }
  login() {
    console.log(
      `Hi ${this.userName}, enjoy your shopping in ${this.ecommerceSite}!`
    );
  }
  static totalusersVisited() {
    console.log(
      `Number of Users visited our site is : ${User.noOfUsersVisited}`
    );
  }
}
class PrimeUser extends User {
  constructor(name, ecommerceSite) {
    super(name, ecommerceSite);
    this.offerPercent = 10;
  }
  primeUserOffer() {
    console.log(
      `You have ${this.offerPercent}% total discount of your cart, Enjoy Shopping ${this.userName}!`
    );
  }
}

const user5 = new PrimeUser("Sangameshwaran", "Flipkart");

user5.login();
user5.primeUserOffer();
User.totalusersVisited();
