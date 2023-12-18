// Promise - it is an JS_object, it represents the eventual completion or failure of an asynchronous operation.

// Promise with regular functions
let promise = new Promise(function (resolve, reject) {
  let total = 9 + 100000000000;
  if (total === 10) resolve(`success : ${total}`);
  else reject(`failed : ${total}`);
});

promise
  .then((dataonFullfilled) => console.log(dataonFullfilled))
  .catch((dataonRejected) => console.log(dataonRejected))
  .finally(() => console.log(`I always be executed`));

// Promise with arrow functions
const tatkalBooking = new Promise((resolve, reject) => {
  let tatkalalBookingStatus = false;
  if (tatkalalBookingStatus)
    resolve(
      `Your Booking is confirmed in VANDE BHARAT EXPRESS , have a Safe Journey!!!, Thankyou IRCTC`
    );
  else
    reject(
      `Your Booking is Rejected due to immense no of bookings for the VANDE BHARAT EXPRESS, Thankyou IRCTC`
    );
});

tatkalBooking
  .then((confirmed) => console.log(confirmed))
  .catch((rejected) => console.log(rejected));

// returning promise from function
function tatkalBooking1() {
  return new Promise((resolve, reject) => {
    let tatkalalBookingStatus = 1;
    if (tatkalalBookingStatus == true)
      resolve(
        `Your Booking is confirmed in VANDE BHARAT EXPRESS , have a Safe Journey!!!, Thankyou IRCTC`
      );
    else
      reject(
        `Your Booking is Rejected due to immense no of bookings for the VANDE BHARAT EXPRESS, Thankyou IRCTC`
      );
  });
}

tatkalBooking1()
  .then((confirmed) => console.log(confirmed))
  .catch((rejected) => console.log(rejected))
  .finally(() => console.log(`Server is down, Please wait for a while!`));

//Promise with multiple "then()" methods
function tatkalBooking2() {
  return new Promise((resolve, reject) => {
    let tatkalalBookingStatus = 1;
    if (tatkalalBookingStatus == true)
      resolve(
        `Your Booking is confirmed in VANDE BHARAT EXPRESS , have a Safe Journey!!!, Thankyou IRCTC`
      );
    else
      reject(
        `Your Booking is Rejected due to immense no of bookings for the VANDE BHARAT EXPRESS, Thankyou IRCTC`
      );
  });
}

tatkalBooking2()
  .then((confirmed) => {
    console.log(confirmed);
    return confirmed + " Black Devil";
  })
  .then((confirmed) => console.log(confirmed))
  .catch((rejected) => console.log(rejected))
  .finally(() => console.log(`Server is down, Please wait for a while!`));
