'use strict';

const myArr = [1,2,3,4,5,6,7,8,9,10];

const forLoop = arr => {
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
const whileLoop = arr => {
  let counter = 0;
  while (counter < arr.length) {
    console.log(arr[counter])
    counter++;
  }
}

const doubler = num => num * 2;
const myMap = (arr, myFunc) => {
  console.log(arr.map(e => myFunc(e)));
}

const evenNum = num => num % 2 === 0;
const myFilter = (arr, myFunc) => {
  console.log(arr.filter(e => myFunc(e)));
}

const myReducer = (arr, myBoolFunc, startingVal=0) => {
  let accumulator = startingVal;
  arr.map( e => { 
    accumulator = accumulator + ((myBoolFunc(e)) ? e : 0)
    // console.log({accumulator});
  });
  return accumulator;
}

console.log(myReducer(myArr, evenNum, 10));
console.log(myReducer(myArr, evenNum, 0));
myFilter(myArr, evenNum);
myMap(myArr, doubler);
whileLoop(myArr);
forLoop(myArr);

console.log('\n\n');

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
newStuff= { ... stuff, cars: [...stuff.cars, 'land rover']};
state= {people: [...people] , stuff: {...stuff}}
newState= {
  people: ['Odie', ...people, 'Garfield'],
  stuff: {...stuff, cars:[...stuff.cars, 'rolls royce']}
}

console.log({newState});
console.log('newState stuff cars:' , newState.stuff.cars);

console.log({state});
console.log('state stuff cars:' , state.stuff.cars);
console.log({newStuff});
console.log({stuff});
console.log({newPeople});
console.log({people});
