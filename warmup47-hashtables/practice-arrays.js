'use strict';

console.log('\n --- ARRAYS ----\n')
const daysOfTheWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
console.log({daysOfTheWeek});

console.log('\n --- for loop')
for (var i=0; i < daysOfTheWeek.length; i++) {
  console.log(daysOfTheWeek[i]);
};
console.log('\n --- for of loop')
for (var v of daysOfTheWeek) {
  console.log(v);
}

console.log('\n --- array.forEach')
daysOfTheWeek.forEach(d=>{console.log(d.toLocaleUpperCase());});

console.log('\n --- array.map')
daysOfTheWeek.map(d => {console.log(d.toUpperCase());});

console.log('\n --- Fibonacci sequence')
var fibonacci = [];
fibonacci[1]=1;
fibonacci[2]=2;

for(var i=3; i < 20; i++) {
  fibonacci[i] = fibonacci[i-1]+fibonacci[i-2];
}
console.log({fibonacci});

console.log('\n --- array operations');
let myArr = [0,1,2,3,4,5,6,7,8,9];
myArr.push(10);
myArr.shift();
console.log({myArr});
myArr.unshift(-1);
myArr.pop();
console.log({myArr});
myArr.pop();
myArr.push(11, 12, 13);
myArr.unshift(-4, -3, -2);
console.log({myArr});


