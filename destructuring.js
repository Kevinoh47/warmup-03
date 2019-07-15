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

console.log('\n------ more practice spread and destructuring assignment ------\n');
const band = ['John','Paul','George'];

const gear = {
  guitar: 'electric',
  base: 'standup',
  drums: 'snare',
  vehicles: ['BandBus','CrewBus']
}

let bandOperation = {};
bandOperation = {band: [...band], gear: {...gear}}

let updatedBand = ['Ringo', ...band, 'Joey Ramone'];
let moreGear = { ...gear, 'vehicles': [...gear.vehicles, 'pressBus']};

console.log({bandOperation});
console.log('bandOperation vehicles: ', bandOperation.gear.vehicles);
console.log({updatedBand});
console.log({moreGear});
console.log('more gear vehicles: ', moreGear.vehicles);

// add band, with new additions, and gear, with new additions:
let updatedBandOperation = {};
updatedBandOperation = 
  { band: ['Ringo!', ...band, 'Joe Strummer'],
    gear: {gear: {...gear, vehicles: [...gear.vehicles, 'Austin Healey']}}
  };

console.log({updatedBandOperation});
console.log('updatedBandOperation gear: ', updatedBandOperation.gear );
console.log('updatedBandOperation gear vehicles: ', updatedBandOperation.gear.vehicles );


