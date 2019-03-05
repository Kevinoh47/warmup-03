'use strict';
let LinkedList = require('./linked-list');
let HashMap = require('./hashMap');

/**
* https://github.com/codefellows-seattle-javascript-401n7/class/blob/master/referenceWHITEBOARD-PRACTICE.md
*/

let myTestList = new LinkedList();

[10,20,30,40,50,60,70,80,90,100,110].map(e => myTestList.append(e));

let myFirstList = new LinkedList();
[10,20,30,40,50,60,70,80,90,100,110].map(e => myFirstList.append(e));

let mySecondList = new LinkedList();
[100, 110,120,130,140,150,160,170,180,190,200,110].map(e => mySecondList.append(e));


console.log('\n---\n');
console.log({'iterating the test list': myTestList.iterator()});
console.log('\n---\n');

// write a function that will concat intersect two linked lists 

let intersector = (list1, list2) => {
  let output = [];
  let myHash = new HashMap(list1.length + list2.length);

  if (list1.head === undefined || list2.head === undefined) {
    return false; // no intersection
  }

  let _hashAdder = (node, hash, sourceStr) => {
    return hash.add(node.value, sourceStr);
  }

  let curr = list1.head;

  while (curr) {
    _hashAdder(curr, myHash, 'list1');
    curr = curr.next;
  }

  curr = list2.head;

  while (curr) {
    // if _hashAdder returns false, we have a potential intersection.
    // but still need to confirm it came from list1 not a dup in list2.
    // this code works for dups in list2 that didn't exist in list1.
    // but if it also exists in list1, then it will be added twice...
    // I had to run a filter on the output array below, which obviates 
    // the need for this check here... 
    if (!_hashAdder(curr, myHash, 'list2')) {
      // find outputs the value for the given key if it exists.
      console.log({[curr.value]: myHash.find(curr.value)});

      if (myHash.find(curr.value) === 'list1') {
        output.push(curr.value);
      }
    }
    curr = curr.next;
  }

  // remove any dups that snuck in from multiple copies in List 2 that also existed in list1.
  // https://mikeheavers.com/tutorials/removing_duplicates_in_an_array_using_javascript/
  // let filteredOutput = output.filter( (element, position) => {
  //   // filter only passes for first index of any element value
  //   return output.indexOf(element) == position;
  // });

  // https://medium.freecodecamp.org/15-useful-javascript-examples-of-map-reduce-and-filter-74cbbb5e0a1f
  let filteredOutput = [... new Set(output)];

  return filteredOutput;

}

console.log('\n---\n');

console.log({'intersector': intersector(myFirstList, mySecondList)});


console.log('\n---\n');

// write a function that will concat union two linked lists

function unionAll (list1, list2) {

  let curr = list1.head;

  while (curr.next) {
    curr = curr.next;
  }
  curr.next = list2.head;
  // list2.head = null; // destroy the second list?
  
  return list1;
}

console.log('\n---\n');
console.log({'unionAll': unionAll(myFirstList, mySecondList).iterator()});


function unionDistinct(list1, list2) {
  let myHash = new HashMap(list1.length + list2.length), curr1, curr2;

  if (list1.head === undefined && list2.head === undefined) {
    return false;
  } else if (list1.head === undefined) {
    return list2;
  } else if (list2.head === undefined) {
    return list1;
  }

  function _addNode(node, hash, source) {

    // add function returns true if added, false if not (which means it already exists)
    return hash.add(node.value, source);
  }

  curr1 = list1.head;
  while(curr1) {
    _addNode(curr1, myHash, 'list1');
    curr1 = curr1.next;
  }

  curr2 = list2.head;

  while(curr2) {
    _addNode(curr2, myHash, 'list2');
    curr2 = curr2.next;
  }

  return myHash.keys().reverse();
}

let myThirdList = new LinkedList();
[1000,2000,3000,4000,2000,5000].map(e => myThirdList.append(e));

let myFourthList = new LinkedList();
[4000, 5000, 6000, 7000, 8000, 7000].map(e => myFourthList.append(e));

console.log('\n---\n');
console.log({'unionDistinct': unionDistinct(myThirdList, myFourthList)});
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

