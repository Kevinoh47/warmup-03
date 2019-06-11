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

console.log({people});
console.log({newPeople});

newStuff = { ...stuff, cars: [...stuff.cars, 'Land Rover']};

console.log({stuff});
console.log({newStuff});

state={people:[...people], stuff:{...stuff}};

newState = {people:['Odie',...people, 'Garfield'], stuff:{ ...stuff, cars:[...stuff.cars, 'Porsche']}};

console.log({state});
console.log(state.stuff.cars);

console.log({newState});
console.log(newState.stuff.cars);
