//while loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//do-while loop
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 10);

//For loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// let name = "Sanga";
// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }

//for-in loop
const myNumlist1 = [25, "Sanga", "Santha", true, null, 9];
for (let array in myNumlist1) {
  console.log(myNumlist1[array]);
}

// for-of loop
const myNumlist2 = [25, "Sanga", "Santha", true, null, 9];
for (let array of myNumlist) {
  console.log(array);
}

//continue(skips)
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  console.log(i);
}
