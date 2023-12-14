// map - takes each element from the array and calls the callbackfnc(same as forEach), but map performs the given operations & returns a new array
// (element, index, array)

const testarr = [1, 2, 3, 4, 5];

const dummy = testarr.map((elements) => elements * 85);

console.log(dummy);
