// we can pass indefinite no of arguments to a fnc, where it stores the parameters in the form of array
function personDetails(...name) {
  for (let pname of name) console.log(pname);
}

personDetails("Sanga", "Santha", "Nattu", "Siva", "Hema", "Tarunya", "Somesh");
