'use strict';

console.log('\n------ spread and destructuring assignment ------\n');
const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = [];
let newStuff = {};
let newState = {};

newPeople = ['Odie', ...people, 'Garfield'];
newStuff = { ...stuff, cars: [...stuff.cars, 'Tesla Roadster']};
newState = {people: ['Odie', ...people, 'Garfield'], stuff: {...stuff, cars:[...stuff.cars, 'Tesla 3']}};
console.log({newState})
console.log('newState.stuff.cars:', newState.stuff.cars);
console.log({newStuff});
console.log({stuff});
console.log({newPeople});



console.log('\n------ ----------------------------------- ------\n');
const myArr = [1,2,3,4,5,6,7,8,9,10];

console.log('\n------ reduce ------\n');

 let divBy3Keep = num => (num % 3 === 0) ? num : 0;

(function (arr, reducerFunc, startingValue=0) {
  let accumulator = startingValue;
  console.log({accumulator});

  arr.forEach((e) => {
    accumulator = accumulator + reducerFunc(e);
    console.log(e, accumulator);
  });

  return console.log({accumulator});
})(myArr, divBy3Keep, 10);


console.log('\n------ filter ------\n');

let divBy3 = num => (num % 3 === 0) ? true:false;

(function (arr, filterFunc) {
  let output = []; 

  arr.forEach(e => (filterFunc(e)) ? output.push(e): null);

  return console.log(output);
})(myArr, divBy3);


console.log('\n------- map -------\n');

(function (arr) {
  let output = []; 

  arr.forEach(e => output.push(e+2));

  //arr.forEach(function(e){output.push(e+2)});

  // arr.forEach(e => {
  //   console.log({e}); 
  //   output.push(e + 2)
  // });
  return console.log(output);
})(myArr);

console.log('\n----- while loop -------\n');

(function (arr) {
    console.log(arr);
    let counter = 1, max = arr.length;
    while (counter <= max) {
      console.log('counter: ', counter, ' value: ', arr[counter-1]);
      counter++;
    }
})(myArr);

console.log('\n----- for loop --------\n');

(function (arr) {
    console.log(arr);

    for (var i = 0; i < arr.length; i++) {
      console.log('index: ', i, ' value: ', arr[i]);
    }
})(myArr);

console.log('------end--------\n');