// Set => It stores unique values only
let setarray = [
  1, 2, 4, 4, 5, 5, 6, 7, 8, 8, 1, 2, 3, 3, 3, 6, 7, 6, 9, 9, 9, 10, 10,
];

let output = new Set(setarray);
for (let elements of output) console.log(elements);

//Map => It Stores the elements in key value pair, it does not store the duplicate key, but it updates the duplicate key -> value.
let arr_Map = [
  ["Sanga", 5],
  ["Santha", 9],
  ["Natarajan", 31],
  ["Natarajan", 41],
];
arr_Map = new Map(arr_Map);

for (let [k, v] of arr_Map) console.log(k, ":", v);
