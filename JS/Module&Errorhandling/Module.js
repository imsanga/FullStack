// Module - It allows us to organize JavaScript files into modules
// Use type="module" in the script tag to instruct the web browser to load a JavaScript file as a module.

// Export Class
export default class Temperature {
  constructor(city) {
    this.city = city;
  }

  get theTemperature() {
    return `${this.city}'s today weather is ${
      this.celsius
    } degree celsius and ${(this.celsius * 9) / 5 + 32} degree Fahrenheit`;
  }
  set theTemperature(celsius) {
    if (celsius >= 50) {
      celsius = 50;
      this.celsius = celsius;
    } else this.celsius = celsius;
  }
}

// //import Module in Main file
// import weather from "./Module.js";
// let city_1 = new weather("Madurai");
// city_1.theTemperature = 45;
// let city_2 = new weather("Chennai");
// city_2.theTemperature = 25;

// console.log(city_1.theTemperature);
// console.log(city_2.theTemperature);

// //for importing as Module => HTML
// <script type="module" src="Test.js"></script>;

// Export fnc
export function greet() {
  console.log(`Come on Sanga!!!`);
}
//export { greet };
