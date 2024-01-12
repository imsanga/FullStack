// Async/Await
// -> function with async always returns promise
// -> await is only valid in async functions
// -> we can call the promises without then() & catch() methods

const friendsreached1 = new Promise((resolve, reject) => {
  let reached_or_not = true;
  if (reached_or_not)
    setTimeout(resolve, 5000, "Partha Reached the Goa Beach!");
  else reject("Partha have not reached Yet!");
});

async function status1() {
  try {
    console.log(`Hi...`);
    let result = await friendsreached1;
    console.log(result);
    console.log(`Bye...`);
  } catch (err) {
    console.log(err);
  }
}
status1();
