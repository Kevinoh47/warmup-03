'use strict';
const Set = require ('../set.js');
// const Hash = require('../hash.js');

let mySet1 = new Set();
let mySet2 = new Set();


let myInput1 = [1,3,5,7,9,11];
let myInput2 = [0,1,2,3,4,6,8,10];

console.log({myInput1});
console.log({myInput2});

let setBuilder = (arr, set) => {
  for (var v of arr) {
    set.add(v);
  }
}

let setBuilder2 = (arr, set) => {
  arr.map(e=>{
    set.add(e)
  });
}

setBuilder(myInput1, mySet1);
setBuilder2(myInput2, mySet2);

console.log('\n ..... SETS .....\n');

console.log('set1 size prop', mySet1.size);
console.log('set1 getSize()', mySet1.getSize());
console.log('set 2 size2()', mySet2.size2());

console.log('set 1 values', mySet1.values());
console.log('set 2 valuesByKey', mySet2.valuesByKey());
console.log('set 2 valuesByValues', mySet2.valuesByValues());
console.log('set 2 valuesByEntries', mySet2.valuesByEntries());

console.log('set 1 hasBool 47 should be false: ', mySet1.hasBool(47));
console.log('set 1 hasBool 3 should be true: ', mySet1.hasBool(3));
console.log('set 2 hasBool 0 should be false: ', mySet2.hasBool(0));

console.log('set 1 has 47 should be false: ', mySet1.has(47));
console.log('set 1 has 0 should be false: ', mySet1.has(0));
console.log('set 2 has 0 should be true: ', mySet2.has(0));
console.log('set 2 has 10 should be false: ', mySet2.has(0));
console.log('set 2 has2() 0 should be true: ', mySet2.has2(0));

mySet2.remove(0);
console.log('just removed zero from mySet2 ... ');
console.log('set 2 size2() should be 7: ', mySet2.size2());
console.log('set2 has 0 should be false: ', mySet2.has(0));

let myUnionSet = mySet1.unionSet(mySet2);
console.log('union output should be 1-11: ', myUnionSet.values());

let myIntersectionArr = mySet1.intersectionArr(mySet2);
console.log('intersection array output should be 1,3: ', myIntersectionArr);

let myIntersectionSet = mySet1.intersection(mySet2);
console.log('intersection set output should be 1,3: ', myIntersectionSet.values());

let myDifference = mySet1.difference(mySet2);
console.log('difference set output should be 5,7,9,11: ', myDifference.values());








// console.log(myHash.has(47));
// console.log(myHash.has(48));
// console.log(myHash.remove(47));
// console.log(myHash.has(47));

// console.log(myHashIterator(myHash2));


// let myHash = new Hash();
// let myHash2 = new Hash();

// myHash.add(47);

// let myHashInput = [1,3,5,7,9,11];
// let myHash2Input = [0,2,4,6,8,10];

// let hashBuilder = (arr, hash) => {
//   for (var v of arr) {
//     hash.add(v);
//   }
// }

// let hashBuilder2 = (arr, hash) => {
//   arr.map(e=>hash.add(e));
// }

// hashBuilder(myHashInput, myHash);
// hashBuilder2(myHash2Input, myHash2);

// let myHashIterator = hash => {
//   return Object.keys(hash);
// }

// console.log(myHashIterator(myHash));
// console.log(myHash.has(47));
// console.log(myHash.has(48));
// console.log(myHash.remove(47));
// console.log(myHash.has(47));

// console.log(myHashIterator(myHash2));
