/* API - Application Programming Interface
-> It acts as a bridge that allows two applications to communicate with each other.
request from client to server: Client(weatherApp) -> API(googleWeatherAPI) -> Server(googleWeatherServer)
response from server to client: Server -> API -> Client
-> REST(RestfulApi): Representational State Transfer - JSON format
-> CRUD - create - read - update - delete
*/

//fetchAPI - fetch(it returns Promise)
//Get Method
fetch(`https://official-joke-api.appspot.com/jokes/random`)
  .then((randomJoke) => randomJoke.json())
  .then((randomJoke) => {
    console.log(`Question: ${randomJoke.setup}, Joke: ${randomJoke.punchline}`);
  })
  .catch((err) => console.log(err));

//Post Method
fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    userId: 22,
    id: 456,
    title: "testDummy",
    completed: false,
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json));
