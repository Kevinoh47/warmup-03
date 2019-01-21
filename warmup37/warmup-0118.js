'use strict';
//const Node = require('../node.js');
const LinkedList = require('../linked-list.js');
const {Stack, Queue} = require('../stacks-and-queues.js');
const {BinaryTree, BinarySearchTree} = require('../tree.js');

console.log('\n ---- data structures ----\n');
let inputArr = [0,5,10,15,20,25,30];
let inputTreeArr = [15,0,20,10,25,30,5];
let linkedL = new LinkedList();
let stacky = new Stack();
let queuey = new Queue();
let searchTree = new BinarySearchTree();
let myHash={};


inputArr.map(e => {
    linkedL.append(e);
    stacky.push(e);
    queuey.enqueue(e);
    myHash[e]=e;
  }  
);
inputTreeArr.map(e =>{
  searchTree.add(e);
});
console.log('\n ---- Hash ----\n');
let myKeys= Object.keys(myHash);

console.log('hash keys: ', myKeys);
let testVal = 30;
console.log('does my hash have 30? ', (myHash[testVal])? 'yes':'no');
testVal = 47;
console.log('does my hash have 47? ', (myHash[testVal])? 'yes':'no');

console.log('\n ---- Binary Search Tree ----\n');
let outputOrdered = searchTree.inOrder();
console.log('ordered tree traversal: ', outputOrdered);
console.log('tree max: ', searchTree.findMaximumValue());
console.log('tree min: ', searchTree.findMinimumValue());
console.log('Is 47 in the tree?', searchTree.search(47));
console.log('Is 25 in the tree?', searchTree.search(25));

console.log('\n ---- LLs, Stacks, Queues ----\n');
let counter=0;
while (counter < inputArr.length) {
  console.log('current input value: ', inputArr[counter]);
  console.log('shifting from linkedL: ', linkedL.shift().value);
  console.log('popping from stack: ', stacky.pop().value);
  console.log('dequeueing from queue: ', queuey.dequeue().value);
  counter++;
}

/* spread and destructuring assignment */
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
newStuff = {...stuff, cars:[...stuff.cars, 'Ford']};
state = {people: [...people], stuff: {...stuff}}
newState = {
  people: ['Odie', ...people, 'Garfield'],
  stuff: {...stuff, cars:[...stuff.cars, 'Chevy']}
}
console.log('\n-----Spread & Destructuring ----\n');
console.log({newState});
console.log('newState stuff.cars', newState.stuff.cars);
console.log('state stuff.cars', state.stuff.cars);
console.log({state});
console.log('\n\n');
console.log({newStuff});
console.log({stuff});
console.log('\n\n');
console.log({newPeople});
console.log({people});
