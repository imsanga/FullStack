// Static Variable - It is used in a class(globalVariable) and not on the instance(variable) of the class.
// Note: static variable & method can be accessed only with the class name
class UserVariable {
  static noOfUsersVisited = 0;
  constructor(userName, ecommerceSite) {
    this.userName = userName;
    this.ecommerceSite = ecommerceSite;
    UserVariable.noOfUsersVisited++;
  }
  login() {
    console.log(
      `Hi ${this.userName}, enjoy your shopping in ${this.ecommerceSite}!!!`
    );
  }
}

const user1 = new UserVariable("Dhoni", "Flipkart");
const user2 = new UserVariable("Virat", "Amazon");

user1.login();
user2.login();
console.log(
  `Number of Users visited our site is : ${UserVariable.noOfUsersVisited}`
);

// Static Method - It is used in a class(globalMethod) and not on the instance(method) of the class.
class UserMethod {
  static noOfUsersVisited = 0;
  constructor(userName, ecommerceSite) {
    this.userName = userName;
    this.ecommerceSite = ecommerceSite;
    UserMethod.noOfUsersVisited++;
  }
  login() {
    console.log(
      `Hi ${this.userName}, enjoy your shopping in ${this.ecommerceSite}!!!`
    );
  }
  static totalusersVisited() {
    console.log(
      `Number of Users visited our site is : ${UserMethod.noOfUsersVisited}`
    );
  }
}

const user3 = new UserMethod("Sachin", "Flipkart");
const user4 = new UserMethod("Yuvi", "Amazon");
const user5 = new UserMethod("Jaddu", "Tata Neu");

user3.login();
user4.login();
user5.login();
UserMethod.totalusersVisited();
