'use strict';

const Hash = require('../hash.js');

let myHash = new Hash(38);
let myInput = [{kevin: 54}, {jane:50}, {william:9}, {julia:5}, {emily:1}];
// let myInput = [{william:9}];

console.log('\n --- hash input ---\n');
myInput.map(e => {
  // console.log({e})
  let name, age, keys=[];
  for(var l in e) {
    name = l;
    age = e[l];
    myHash.put(name, age);
  }
});

console.log('\n --- exercise the hash ---\n');

// what is william's age?
console.log('william info: ', myHash.get('william'));

// Do we have someone named Goober?
console.log("Goober?", myHash.get('Goober'));

console.log("William with a capital W?", myHash.get('William'));

console.log('how many slots?', myHash.size);

// kevin julia and emily are a hash collision:

console.log('julia: ', myHash.get('julia'));

console.log('emily: ', myHash.get('emily'));

console.log('\n --- put bumper in ---\n');

myHash.put('bumper', 9);

console.log('Lets see bumper: ', myHash.get('bumper'));

console.log('Sadly bumper died. Remove bumper: ')
myHash.remove('bumper');

console.log('is bumper still there?',myHash.get('bumper'));
