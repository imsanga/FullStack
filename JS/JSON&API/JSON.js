// JSON - Javascript Object Notation
// It is used for Data transmission from the server

// let jsonObj = { //strings should be given in double quotes in keys also
//     "Stock": "TCS",
//     "Price": 3400
// }

let json = `[
    {
        "Name":"Sanga",
        "Role":"Software Developer"
    },
    {
        "Country":"Australia",
        "City":"Sydney"
    }
  ]`;

//JSON.parse -> It converts string to JS object
let resultJ = JSON.parse(json);
console.log(resultJ[0].Name);

//JSON.stringify - (To Transmit) object as a string
console.log(JSON.stringify(resultJ));
