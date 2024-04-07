//Synchronous_JS: Blocking - Executes line by line(start now & finish now)
//Asynchronous_JS=> Non - Blocking(Event loop)(start now & finish later): it starts executing and displays the output in the desired amount of time(1 second = 1000 milliseconds) initiated or an onclick event(Event listener), which is the minimum time of execution for that functions to execute.
// EventLoop - All asyncJS items, from the callstack goes to the browser & comes to callback Queue. Event loop checks whether the callstack is empty or not, if it's empty it sends the items from callbackQueue to callstack.

console.log(`kjbdfbnkdfb`);
console.log(`keglknbmkc`);
console.log(`kjncknvnfch`);

setTimeout(() => console.log(`sdfhgngn`), 4000);
setTimeout(() => console.log(`fhdfgh`), 2000);
setTimeout(() => console.log(`sdfhgdfghghhngn`));

for (let index = 1; index <= 10; index++) console.log(index);

setInterval(() => console.log(`Acount Hacked`), 5000);
