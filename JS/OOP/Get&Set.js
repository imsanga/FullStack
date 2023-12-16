//The get keyword binds an object property to a method that will be invoked when that property is looked up.
//The set keyword binds an object property to a method that will be invoked when that property is assigned.

class Vote {
  constructor(age) {
    this._age = age;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    if (age < 18) this._age = "not elgible to vote";
  }
}

const voter1 = new Vote(50);
voter1.age = 15; //settingUp
console.log(voter1.age); //DisplayingIt
