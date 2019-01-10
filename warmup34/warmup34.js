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

newPeople = ['Odie',  ...people, 'Garfield'];
newStuff = { ...stuff, cars: [...stuff.cars, 'Suzuki', 'Honda']};
state = {people: [...people], stuff: {...stuff}}
newState = {people: [ 'Odie', ...people, 'Garfield'], stuff: { ...stuff, cars: [...stuff.cars, 'Tesla']}}

console.log({newState});
console.log('new state stuff cars: ', newState.stuff.cars);
console.log('state stuff cars: ', state.stuff.cars);
console.log({state});
console.log({newStuff});
console.log({stuff});
console.log({newPeople});
