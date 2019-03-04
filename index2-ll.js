'use strict';
let LinkedList = require('./linked-list');

/**
* https://github.com/codefellows-seattle-javascript-401n7/class/blob/master/referenceWHITEBOARD-PRACTICE.md
*/

let myTestList = new LinkedList();

[10,20,30,40,50,60,70,80,90,100,110].map(e => myTestList.append(e));

console.log('\n---\n');
console.log({'iterating the test list': myTestList.iterator()});
console.log('\n---\n');

// write a function called contains(list, value) that returns the first node in a linked list that conains a value or null if not found

function contains(list, value) {

  let output = [];

  let _searchNodes = (node, value) => {
    return (node.value === value);
  }

  let curr = list.head;

  if (curr === undefined) { return false}

  while (curr) {
    if (_searchNodes(curr, value)) {  output.push(curr); }
    curr = curr.next;
  }
  return (output.length) ? output[0] : false;
}

console.log({'list contains 70': contains(myTestList, 70)});
console.log({'list contains 77': contains(myTestList, 77)});

console.log('\n---\n');
console.log({'toArray(list) function': toArray(myTestList)});

// write a function called toArray(list) that creates an array of the values of a linked list

function toArray(list) {

  let output = [];

  let _recurseNodes = (node, arr) => {
    arr.push(node.value);
  }

  let curr = list.head;

  if (curr === undefined) { return false}

  while (curr) {
    _recurseNodes(curr, output);
    curr = curr.next;
  }

  return (output.length) ? output : false;
}

console.log('\n---\n');
console.log({'toArray(list) function': toArray(myTestList)});

// write a recursive function called prettyPrint(list) to print every value in a linked list

let recursivePP = list => {

  let curr = list.head;

  if (curr === undefined) { return false;}

  let _printNodeVal = node => console.log(node.value);

  while(curr) {
    _printNodeVal(curr);
    curr = curr.next;
  }
}

console.log('\n---\n');
console.log('recursive pretty print');
recursivePP(myTestList);

// write a function called prettyPrint() that uses a while loop to print every value in a linked list

let prettyPrint = list => {
  let curr = list.head;

  if (curr === undefined) {return false;}

  while (curr.next) {
    console.log(curr.value);
    curr = curr.next;
  }
  console.log(curr.value);
}

console.log('\n---\n');
console.log('pretty print');
prettyPrint(myTestList);

