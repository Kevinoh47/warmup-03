'use strict';
const LinkedList = require('../linked-list');
const Set = require('../set');
const { Stack, Queue } = require('../stacks-and-queues');
const HashMap = require('../hashMap');
const util = require('util');
const {BTNode, BSTree} = require('../tree');

/** 
 * https://github.com/codefellows-seattle-javascript-401n7/class/blob/master/reference/WHITEBOARD-PRACTICE.md
 */

let CoinToss = () => {
  return (Math.floor(Math.random() * 2) === 0) ? '\nheads\n' : '\ntails\n';
}
console.log(
  CoinToss(), 
  CoinToss(), 
  CoinToss(), 
  CoinToss(), 
  CoinToss()
);

console.log('\n\n----------------------------------------------');
console.log('Exercising new BSTree Binary Search Tree class implementation:\n')

let myTree = new BSTree();

[11,7,15,5,3,9,8,10,13,12,14,20,18,25].map(e => {
  myTree.insert(e);
});

console.log({'myTree count should be 14': myTree.getCount()});
console.log({'myTree root should be 11': myTree.getRoot()});

function printMe(node) {
  return console.log(node.key);
}

// ordered traversal:
myTree.inOrderTraversal(printMe);

let myInOrderKeysArr = myTree.inOrderTraversal();
console.log({myInOrderKeysArr});

// pre-ordered traversal:
myTree.preOrderTraversal(printMe);

let myPreOrderKeysArr = myTree.preOrderTraversal();
console.log({myPreOrderKeysArr});

// post-ordered traversal:

myTree.postOrderTraversal(printMe);

let myPostOrderKeysArr = myTree.postOrderTraversal();
console.log({myPostOrderKeysArr});



console.log('\n\n----------------------------------------------');
console.log('Find intersection of two linked lists: (most efficient approach should be HT):\n')

let people = new LinkedList();
let dogs = new LinkedList();
let peopleNoIntersect = new LinkedList();
let dogsNoIntersect = new LinkedList();

['joe', 'mary', 'skip', 'rosie', 'eva', 'mary'].map(e => people.append(e));
['spot', 'skip', 'beau', 'eva', 'pasha', 'rosie', 'spot', 'eva'].map(e => dogs.append(e));

['joe', 'mary', 'skip', 'mary'].map(e => peopleNoIntersect.append(e));
['spot', 'beau', 'pasha', 'rosie', 'spot'].map(e => dogsNoIntersect.append(e));

function listsIntersection (l1, l2) {
  let seenAlready = new HashMap(l1.length + l2.length);
  let newlyAdded, fromList;
  let output = [];
  let curr = l1.head;

  while (curr.next) {
    seenAlready.add(curr.value, 1);
    curr = curr.next;
  }
  // tail:
  seenAlready.add(curr.value, 1);

  // now iterate the second list;
  curr = l2.head;
  while (curr.next) {
    newlyAdded =  seenAlready.add(curr.value, 2);
    if (!newlyAdded) {

      // test that it isn't a dup in l2, and that it hasn't already been added as an intersection
      fromList =  seenAlready.find(curr.value);

      console.log({fromList});

      if (fromList === 1 && !output.includes(curr.value)) {
        output.push(curr.value);
      }
    }
    curr = curr.next;
  }
  // tail:
  newlyAdded = seenAlready.add(curr.value, 2);
  if (!newlyAdded) {
    
    // test that it isn't a dup in l2, and that it hasn't already been added as an intersection
    fromList = seenAlready.find(curr.value);

    console.log({fromList});

    if (fromList === 1 && !output.includes(curr.value)) {
      output.push(curr.value);
    }
  }

  return (output.length) ? output : false;
}



console.log({'people and dog name intersection should be skip, rosie, eva not necessarily in that order':  listsIntersection(people, dogs)});

console.log({'no intersection here should return false':  listsIntersection(peopleNoIntersect, dogsNoIntersect)});


console.log('\n\n----------------------------------------------');
console.log('Find duplicate values in a linked list: (most efficient approach should be HT):\n')

let FamilyWithDups = new LinkedList(), FamilyWithOutDups = new LinkedList();

['kevin', 'jane', 'william', 'julia', 'emily', 'kevin', 'eva', 'eva', 'beppo', 'emmy', 'beppo'].map(e => FamilyWithDups.append(e));

['kevin', 'jane', 'william', 'julia', 'emily', 'eva', 'beppo', 'emmy'].map(e => FamilyWithOutDups.append(e));

let findDupsEfficiently = list => {

  let alreadySeen = new HashMap(25), current = list.head, addedCurrent, dupList = [];
  

  while(current.next) {
    addedCurrent = alreadySeen.add(current.value, 1);
    if(!addedCurrent) {
      dupList.push(current.value);
    }
    current = current.next;
  }
  // tail
  addedCurrent = alreadySeen.add(current.value, 1);
  if(!addedCurrent) {
    dupList.push(current.value);
  }

  return (dupList.length ? dupList: false);
}

console.log({'list with dups should return dup values': findDupsEfficiently(FamilyWithDups)});
console.log({'list without dups should return false': findDupsEfficiently(FamilyWithOutDups)});

console.log('\n\n----------------------------------------------');
console.log('My New improved HashMap class with add() method, guarranteeing unique keys:\n')

let myHash = new HashMap(25);
myHash.set('kevin', 'dad');
myHash.set('william', 'son');
myHash.set('julia', 'daughter');
myHash.set('emily', 'daughter');
console.log({'DUP-KEY ADD SHOULD RETURN FALSE': myHash.add('kevin','test this should fail')});
myHash.add('jane', 'mother');
console.log(util.inspect(myHash, {showHidden:false, depth: null}));

console.log({'find method should return dad for kevin': myHash.find('kevin')});
console.log({'find method should return son for william': myHash.find('william')});
console.log({'find method should return false for nonexistent': myHash.find('nonexistent')});

console.log('\n\n----------------------------------------------');
console.log('testing improvements to linked list class remove method\n')

let myTestLL = new LinkedList();

console.log('remove from null returns null: ', myTestLL.remove(0));

[1,2,3,4,5,6,7,8,9].map(e => myTestLL.append(e));

console.log({'head': myTestLL.getHeadValue(), 'tail': myTestLL.getTailValue(), 'len': myTestLL.getLength()});
console.log('remove offset larger than length returns null: ', myTestLL.remove(10));


let myFunkyTestResults = myTestLL.remove(4);
console.log('removing offset in the middle (index 4):', myFunkyTestResults.iterator());
console.log({'head': myTestLL.getHeadValue(), 'tail': myTestLL.getTailValue(), 'len': myTestLL.getLength()});

myFunkyTestResults = myTestLL.remove(0);

console.log('removing head (index 0):', myFunkyTestResults.iterator());
console.log({'head': myTestLL.getHeadValue(), 'tail': myTestLL.getTailValue(), 'len': myTestLL.getLength()});

myFunkyTestResults = myTestLL.remove(6);

console.log('removing tail (index 6):', myFunkyTestResults.iterator());
console.log({'head': myTestLL.getHeadValue(), 'tail': myTestLL.getTailValue(), 'len': myTestLL.getLength()});


// console.log('\n----------------------------------------------');
// console.log('STACKS & QUEUES Q3: use queues to call a list of async (err, data) node functions one after the other\n')

// async function urlCaller(err, data) {
//   return (data)
//   //console.log(await a.text().slice(0, 50));
// }

// let myUrls = new Queue();

// [`www.time.com`, `www.nbcnews.com`, `www.today.com`,`www.nytimes.com`].map(e => myUrls.enqueue(e));

// while(myUrls.front) {
//   let currentUrl = myUrls.dequeue();
//   urlCaller( null, currentUrl);
// }


console.log('\n\n-------------STACKS AND QUEUES----------------\n');
console.log('\n\n ---------------------------------------------------\n');
console.log('---STACKS & QUEUES Q2:  write a function called dedup(linkedList) that will remove <<<consecutive>>> duplicate values of a linked list (using a stack)---\n');
console.log('NOTE: REMOVING IN PLACE CAUSED BREAKAGE OF UNDERLYING LIST. POSSIBLY CALLING REMOVE VIA an ASYNC / AWAIT FUNCTION WOULD WORK. INSTEAD, I BUILT AN ARRAY OF OFFSETS TO REMOVE, REVERSED IT, AND REMOVED THEM VIA A MAP FUNCTION...')

let dedupList = list => {
  let myStack = new Stack();
  let curr = list.head;
  let currentOffset = 0;
  let offsetsToRemove = [];

  // empty list 
  if( curr === undefined ) {
    return false;
  }

  // just one element means no dups.
  if( list.length === 1 ) {
    return list;
  }

  while (curr && curr.next) {
    if (currentOffset === 0) {
      myStack.push(list.head.value);
    }

    else if (currentOffset === 1) {
      if (curr.value === list.head.value) {
        offsetsToRemove.push(currentOffset); 
      }
      else {
        myStack.push(curr.value);
      }
    }

    else if (currentOffset > 1 ) {

      let prevVal = myStack.peek().value;
      if (curr.value !== prevVal) {
        myStack.push(curr.value);
      }
      // found a consecutive duplicate
      else if (curr.value === prevVal) {
        offsetsToRemove.push(currentOffset); 
      }
    }

    // console.log({'offset': currentOffset, 'curr' : curr});

    currentOffset++;
    curr = curr.next;
  }

  // console.log({'current should now be tail': curr});

  // tail (no current.next):
  if (curr && (curr.next === null || curr.next === undefined)) {

    // console.log({'peeking on tail': myStack.peek()});
    
    if ( curr.value === myStack.peek().value ) {
      offsetsToRemove.push(currentOffset); 
    }
  }

  if(offsetsToRemove.length) {
    offsetsToRemove.reverse().map(e => list.remove(e))
  }

  return list;
}


let duppy = new LinkedList();
[1,2,3,4,4,4,5,6,6].map(e => duppy.append(e));

console.log('before deduping', duppy.iterator(), ' duppy head: ', duppy.getHeadValue(), ' duppy tail: ', duppy.getTailValue());

console.log('the list looks correct:');

let myCurr = duppy.head;
while(myCurr.next) {
  console.log({myCurr});
  myCurr = myCurr.next;
}
console.log({myCurr});
console.log('\n\nNow going to run the deduping:\n');
dedupList(duppy);
console.log('after deduping we should have 1,2,3,4,5,6:', duppy.iterator());



//console.log('function not a method, so do not have to do in place.')

// let dedupList = list => {
//   let myStack = new Stack();
//   let curr = list.head;
//   let currentOffset = 0;
//   let offsetsToRemove = [];

  
//   // empty list 
//   if( curr === undefined ) {
//     return false;
//   }

//   // just one element means no dups.
//   if( list.length === 1 ) {
//     return list;
//   }

//   while (curr && curr.next) {
//     if (currentOffset === 0) {
//       myStack.push(list.head.value);
//     }

//     else if (currentOffset === 1) {
//       if (curr.value === list.head.value) {
//         list.remove(0); // remove previous which is list head
//       }
//       else {
//         myStack.push(curr.value);
//       }
//     }

//     else if (currentOffset > 1 ) {


//       let prevVal = myStack.peek().value;
//       if (curr.value !== prevVal) {
//         myStack.push(curr.value);
//       }
//       // found a consecutive duplicate
//       else if (curr.value === prevVal) {
//         // remove the previous one, not the current one, since we will need to check the current one too.
//         list.remove(currentOffset - 1); 
//       }
//     }

//     console.log({'offset': currentOffset, 'curr' : curr});

//     currentOffset++;
//     curr = curr.next;
//   }

//   console.log({'current should now be tail': curr});

//   // tail (no current.next):
//   if (curr && (curr.next === null || curr.next === undefined)) {

//     console.log({'peeking on tail': myStack.peek()});
    
//     if ( curr.value === myStack.peek().value ) {
//       // We can remove either the tail or the previous one; tail is easier.
//       list.remove(currentOffset);
//     }
//   }

//   return list;
// }

// let duppy = new LinkedList();
// [1,2,3,4,4,4,5,6,6].map(e => duppy.append(e));

// console.log('before deduping', duppy.iterator(), ' duppy head: ', duppy.getHeadValue(), ' duppy tail: ', duppy.getTailValue());

// console.log('the list looks correct:');

// let myCurr = duppy.head;
// while(myCurr.next) {
//   console.log({myCurr});
//   myCurr = myCurr.next;
// }
// console.log({myCurr});
// console.log('\n\nNow going to run the deduping which works partially. It appears that the underlying list is now broken at the last node 4...');
// dedupList(duppy);
// console.log('after deduping we should have 1,2,3,4,5,6:', duppy.iterator());


console.log('\n\n ---------------------------------------------------\n');
console.log('---STACKS & QUEUES Q1:  write a function called reverse(likedList) that will reverse a linked list using a stack---\n');

let reverseLL = list => {
  let myStack = new Stack();
  let output = new LinkedList();

  let current = list.head;
  while(current.next) {
    myStack.push(current.value);
    current = current.next;
  }
  // tail:
  myStack.push(current.value);

  while(myStack.top !== null) {
    output.append(myStack.pop().value);
  }

  return output;
}

let myLL3 = new LinkedList();
let myinput3 = [444, 777, 555, 999, 888, 1101, 333, 222, 47, 74, 47, 333, 333];
myinput3.map(e => {
  // console.log('appending to myLL3: ' , e);
  myLL3.append(e);
});

// console.log('myLL3 length: ', myLL3.length);
// console.log('myLL3 head: ', myLL3.head);
// console.log('myLL3 tail: ', myLL3.tail);

// console.log('length: ', myLL3.getLength());
// console.log('head value: ', myLL3.getHeadValue());
// console.log('second node: ', myLL3.getSecond());
// console.log('tail value: ', myLL3.getTailValue());

console.log('list: ', myLL3.iterator());
let myReversedLL = reverseLL(myLL3);
console.log('reversed list: ', myReversedLL.iterator());

console.log('efficiency? space: O(3n) === O(n); time: O(2n) === O(n)')


console.log('\n\n ---------------------------------------------------\n');


console.log('\n\n ---------------------------------------------------\n');
console.log('---write a recursivefunction that prints the fibonacci sequence up to the given number ---\n');

function fibonacciRecurse(desiredLength) { 
  let results = [1,2];

  function myRecurse(currIdx) {

    if (results.length === desiredLength) {
      console.log({results});
      return;
    }
    else {
      results.push(results[currIdx-2] + results[currIdx-1]);
    
      console.log({results});

      myRecurse(currIdx + 1);
    }
  }

  myRecurse(2);
  return results;
}

console.log('recursive fibonacci to 10: ', fibonacciRecurse(10));
console.log('recursive fibonacci to 15: ', fibonacciRecurse(15));

console.log('\n\n ---------------------------------------------------\n');
console.log('---write a function that  prints the fibonacci sequence up to the given number ---\n');

function fibonacci(num) {

  let index2BehindCurr = 0, index1BehindCurr = 1, results = [1,2]

  for (var i = 0; i < num-2; i++) {

    let nextVal = results[index2BehindCurr] + results[index1BehindCurr];
  
    results.push(nextVal);

    index1BehindCurr++;
    index2BehindCurr++;
  }

  return results;

}

console.log('fibonacci sequence, 10 places: ', fibonacci(10));


  

console.log('\n\n ---------------------------------------------------\n');
console.log('---write a function that recursively counts down to zero from a given number---\n');

function countDown(num) {
  if (num === 0) {
    console.log(0);
    return;
  }
  console.log(num);
  countDown(num-1);
}

countDown(10);

console.log('\n\n ---------------------------------------------------\n');
console.log('---write a function that recursively calculates a factorial sequence---\n');

let factorialRecurse = num => {
  if (num === 1) {
    return 1;
  }

  return num * factorialRecurse(num - 1);
}

console.log('factorial 3 should be 6: ', factorialRecurse(3));
console.log('factorial 4 should be 24: ', factorialRecurse(4));
console.log('factorial 5 should be 120: ', factorialRecurse(5));
console.log('factorial 6 should be 720: ', factorialRecurse(6));


console.log('\n\n ---------------------------------------------------');
console.log(' ---------------------------------------------------\n');
console.log('---find the middle of a linked list---\n');

function midFinder(list) {
  let tortoise = list.head;
  let hare = list.head;
  while(hare && hare.next) {
    tortoise = tortoise.next;
    hare = (hare.next.next) ? hare.next.next : null;
  }
  return tortoise;
}

let midTest = new LinkedList();
[1,2,3,4,5,6,7,8,9].map(e => midTest.append(e));
let midTest2 = new LinkedList();
[1,2,3,4,5,6,7,8].map(e => midTest2.append(e));
console.log(midFinder(midTest));
console.log(midFinder(midTest2));
console.log(midFinder(myLL3));

console.log('\n\n ---------------------------------------------------');
console.log(' ---------------------------------------------------\n');
console.log('---reverse a linked list version2 (preferred).---\n');
let reverseList = list => {
  var current = list.head;
  var next = null;
  var previous = null;
  
  while(current) {
    // temp holding place for next. Should be null for current tail node.
    next = current.next;
    
    // reverse the current direction
    current.next = previous;

    // prepping for next iteration
    previous = current;

    current = next;
  }
  list.tail = list.head;
  list.head = previous;
}

let reverseMe2 = new LinkedList();
[1,2,3,4,5,6,7].map(e => reverseMe2.append(e));

console.log('before reversing: ', reverseMe2.iterator());
console.log('old head: ', reverseMe2.getHeadValue());
console.log('old tail: ', reverseMe2.getTailValue());

reverseList(reverseMe2);

console.log('after reversing: ', reverseMe2.iterator());
console.log('new head: ', reverseMe2.getHeadValue());
console.log('new tail: ', reverseMe2.getTailValue());

// console.log('\n---reverse a linked list version1.---\n');
// /**
//  * Reverse a link list
//  * 
//  */

//  let listReverser = list => {

//    if (list.length < 2) {return }

//    let first = list.head;
//    let second = first.next;

//    while(second) {
//      let temp = second.next;
//      second.next = first;
//      first = second;
//      second = temp;
//    }

//    list.head.next = null;
//    list.tail = list.head;
//    list.head = first;
//  }

//  let reverseMe = new LinkedList();
//  [1,2,3,4,5,6,7].map(e => reverseMe.append(e));

//  console.log('before reversing: ', reverseMe.iterator());

//  listReverser(reverseMe);

//  console.log('after reversing: ', reverseMe.iterator());
  console.log(' \n\n---------------------------------------------------\n');

/**
 * Write a function that takes in a linked list and returns true if the list contains a cycle (a node points to a node behind it in the list)
 */
console.log('---write a test for an ouroboros linked list.---\n');
console.log('the common approach here is called tortoise and hare algorithm. See http://www.thatjsdude.com/interview/linkedList.html#detectLoop')


function detectLoop(list) {
  let slow = list.head;
  let fast = list.head;

  while(slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      console.log('\nwhere loop is detected - not necessarily the actual start of the loop: ', slow.value, '\n'); 
      return true;
    }
  }
  return false;
}
 
let ouroborosTest1 = new LinkedList();
[1,2,3,4,5].map(e => ouroborosTest1.append(e));

console.log('our current tail: ', ouroborosTest1.tail);
console.log('our current tail by chaining nexts: ',ouroborosTest1.head.next.next.next.next );
console.log('head.next.next :', ouroborosTest1.head.next.next);


console.log('First test for a loop should return false: ', detectLoop(ouroborosTest1));

// now make it a loop manually. It is NODES not values!
ouroborosTest1.head.next.next.next.next.next = ouroborosTest1.head.next.next;
console.log('2nd test for a loop should return true: ', detectLoop(ouroborosTest1));

/**
 * Write a function that takes in a linked list and returns true if the list contains a cycle (a node points to a node behind it in the list)
 */
console.log(' \n\n---------------------------------------------------\n');
console.log('---write a function that finds the beginning of a loop in a linked list.---\n');
console.log('See http://www.thatjsdude.com/interview/linkedList.html#LoopStart')


function findLoopStart(singleLinkedList) {
  var slow = singleLinkedList.head;
  var fast = singleLinkedList.head;

  while (slow && fast) {
    if(!fast.next) {
      return false; // no loop
    }
    slow = slow.next;
    fast = fast.next.next;

    // we know there is a loop but haven't yet found the starting node.
    if (slow == fast) {
      slow = singleLinkedList.head; //reset slow to the beginning
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
}

console.log(findLoopStart(ouroborosTest1));

/** LINKED LISTS Q6)
 * write splice for a linked list
 * the array splice method has input params for starting index, delete count, and an indeterminate number of inputs to add. If Delete Count is 0, you should have inputs and just shim them in. Splice operates on the given array.
*/

console.log(' \n\n---------------------------------------------------\n');
console.log('---added splice method based on below to the Linked List class.---\n');
console.log('---version three: a LL method---\n');

let testingLLSpliceMethod = new LinkedList();
[100,110,120,130,200].map(e => testingLLSpliceMethod.append(e));
console.log('initial LL: ', testingLLSpliceMethod.iterator());

// an index = LL.length or greater returns null;
testingLLSpliceMethod.splice(5, 0, 140,150,160,170,180,190);
console.log('an index of LL.length or greater leaves LL as is: ', testingLLSpliceMethod.iterator());

// put in the missing values:
testingLLSpliceMethod.splice(3, 0, 140,150,160,170,180,190);

console.log('LL after adding in missing values: ', testingLLSpliceMethod.iterator());

// replace 1 element at index 4:
testingLLSpliceMethod.splice(4, 1, 141);
console.log('LL after replacing 140 with 141: ', testingLLSpliceMethod.iterator());

// remove some index 4, 5, 6 (141, 150, 160):
testingLLSpliceMethod.splice(4, 3, 142,152,162);

console.log('LL after removing 141, 150 and 160 and replacing with 142, 152, 162: ', testingLLSpliceMethod.iterator());

//console log just removing the first one:
testingLLSpliceMethod.splice(0, 1);
console.log('LL after removing thie FIRST one: ', testingLLSpliceMethod.iterator());

//console log just removing the last one:
testingLLSpliceMethod.splice(9, 1);
console.log('LL after removing thie LAST one: ', testingLLSpliceMethod.iterator());


console.log('\n\n ---------------------------------------------------\n');
console.log('--- new InsertAfterIndex method added to LL class.---\n');

let testingLLInsertAfterIndex = new LinkedList();
[10,11,12,13,20].map(e => testingLLInsertAfterIndex.append(e));

console.log('initial LL: ', testingLLInsertAfterIndex.iterator());

console.log('an index of LL.length or greater returns null: ', testingLLInsertAfterIndex.insertAfterIndex(5, 47));

testingLLInsertAfterIndex.insertAfterIndex(-1, 9);
console.log('appended 9 to beginning: ', testingLLInsertAfterIndex.iterator());

testingLLInsertAfterIndex.insertAfterIndex(5, 21);
console.log('appended 21 to the end: ', testingLLInsertAfterIndex.iterator());

testingLLInsertAfterIndex.insertAfterIndex(4, 14);
console.log('appended 14 after 13 (index 4): ', testingLLInsertAfterIndex.iterator());


console.log('\n\n ---------------------------------------------------\n');
console.log('---write splice for a Linked List.---\n');
console.log('---version two: operates on the input LL.---\n');

let splicer = (list, index, deleteCount, ...rest) => {
  let  counter, currIndex, additions = [...rest];

  // adding but not removing
  if (deleteCount < 1 && additions.length > 0) {
    counter = 0;
    currIndex = index;
    while (counter < additions.length) {
      list.insertAfterIndex(currIndex, additions[counter]);
      counter++;
      currIndex++;
    }
  }
  // removing or replacing
  else if (deleteCount > 0 ) {
    counter = 0;
    while (counter < deleteCount) {
      list.remove(index); // index stays the same because the next takes over index slot each iteration.
      counter ++;
    }
    counter = additions.length;
    while (counter > 0) {
      currIndex = index-1;
      list.insertAfterIndex(currIndex, additions[counter-1]);
      counter--;
      currIndex++;
    }
  }

  return list;
}

let myTestList = new LinkedList();
[1,2,3,4,5,6,7,8,9].map(e => myTestList.append(e));

console.log('starting values: ', myTestList.iterator());

// just add some more in the middle
splicer(myTestList, 2, 0, 3.2, 3.3, 3.4);
console.log('my TestList should have a new length of 12: ', myTestList.getLength());
console.log('Linked list with additional values that were spliced in: ', myTestList.iterator());

// replace:
splicer(myTestList, 2, 1, 3.1);
console.log('replace 3 with 3.1: ', myTestList.iterator());


console.log('\n\n ---------------------------------------------------\n');
console.log('\n---version one: returns an ARRAY that appends on the added values, and removes the expected values as well.---\n');

let listSplice = (list, index, deleteCount, ...rest) => {
  let outputArr = [];

  let curr = list.head;

  // initial populating of array
  while (curr.next){
    outputArr.push(curr.value);
    curr = curr.next;
  }
  outputArr.push(curr.value);
  
  // remove values from output array:
  outputArr.splice(index, deleteCount, ...rest);
  
  return outputArr;
}

console.log('initial values: ', myLL3.iterator());

console.log('after removing 1 and input two at index 4: ', listSplice(myLL3, 4, 1, 111111, 111112));

console.log('\n\n ---------------------------------------------------\n');
console.log('---LL Q 5: write a function that concatenates two Linked Lists, as an intersect. Thus, only the dups in the new one.---\n');

let myIntersect = (LL1, LL2) => {
  let output = new LinkedList();
  let testSetAll= new Set();
  let dups = new Set();

  let current = LL1.head;
  while (current.next) {
    testSetAll.add(current.value);
    current = current.next;
  }
  testSetAll.add(current.value);

  current = LL2.head;
  while (current.next) {
    if (testSetAll.has(current.value) && !(dups.has(current.value))) {
      testSetAll.add(current.value);
      dups.add(current.value)
    }
    current = current.next;
  }
  if (testSetAll.has(current.value) && !(dups.has(current.value))) { 
    dups.add(current.value);
  }

  console.log({dups})
  
  for (var v of dups.values()) {
    output.append(v);
  }

  return (output.length) ? output : null ;
}

let myLL001 = new LinkedList();
let myLL002 = new LinkedList();

[1,2,3,4,5,6,7,7,7,6,6,6].map(e => myLL001.append(e));
[4,5,6,6,7,7,7,8,9,10,11].map(e => myLL002.append(e));

console.log('the iterator over the output LL should be 4,5,6,7: ', myIntersect(myLL001, myLL002).iterator());


console.log('\n\n ---------------------------------------------------\n');
console.log('---LL Q 4: write a function that concatenates two Linked Lists, as a union. Union means all values, and unlike sets which do not have dups, this will support dups.---\n');

let concatUnion = (LL1, LL2) => {
  let OutputLL = new LinkedList();
  let current = LL1.head;

  while(current.next) {
    OutputLL.append(current.value);
    current = current.next;
  }
  OutputLL.append(current.value);

  current = LL2.head;
  while(current.next) {
    OutputLL.append(current.value);
    current = current.next;
  }
  OutputLL.append(current.value);

  return OutputLL;
}

let myLL01 = new LinkedList();
let myLL02 = new LinkedList();

[1,2,3,4,5].map(e => myLL01.append(e));
[4,5,6,7,8].map(e => myLL02.append(e));


let output = concatUnion(myLL01, myLL02);

console.log(output.iterator());



console.log('\n\n ---------------------------------------------------\n');
console.log('---write a function that finds whether there are any duplicates in a LL. No worries about dup count---\n');

let dupedVals = (list) => {
  let myVals = [];
  let myDups = [];

  let myRecurse = node => {
    let currVal = node.value;
    if (myVals.includes(currVal) && !myDups.includes(currVal)) {
      myDups.push(currVal);
    }
    else {
      myVals.push(currVal);
    }

    if (node.next) {
      myRecurse(node.next);
    }
  }

  myRecurse(list.head);

  return myDups;
}

let myDups2 = dupedVals(myLL3);
console.log({myDups2});

console.log('\n\n ---------------------------------------------------\n');
console.log('---write a function that finds whether there are any duplicates & dup count  in a LL .---\n');

let dupedValCounts = (list) => {
  let myVals = {};

  let myRecurse = node => {
    let currVal = node.value;
    if (myVals[currVal]) {
      myVals[currVal]++;
    }
    else {
      myVals[currVal] = 1;
    }

    if (node.next) {
      myRecurse(node.next);
    }
  }

  myRecurse(list.head);

  let myDups = [];
  for (const [key, val] of Object.entries(myVals)) {
    if (val > 1) { myDups.push({[key]:val})};
  }
  
  return myDups;
}

let myDups = dupedValCounts(myLL3);
console.log({myDups});

/** LINKED LISTS Q3)
 * write a function called contains(list, value) that returns the first node in a linked list that conains a value or null if not found
*/

console.log('\n\n ---------------------------------------------------\n');
console.log('---write a function that finds the first node containing a searched for value .---\n');
let contains = (list, value) => {
  let result = false;

  function myRecurse(node){
  
    // console.log('recursing over node value: ', node.value)

    if (node.value === value) {
      result = node;
      console.log({result})
    } 
    if (node.next && !result) {
      myRecurse(node.next);
    }
    return result;
  }

  let startNode = list.head;
  console.log({startNode})
  let containsResult = myRecurse(startNode, value);
  console.log({containsResult});
  return (containsResult) ? containsResult : null;
}

let result47 = contains(myLL3, 47);
let resultNull = contains(myLL3, -131);
console.log('LL Q3 does LL contain 47? ', result47.value);
console.log('LL Q3 does LL contain -131? ', resultNull);

/**
* LINKED LISTS Q2) write a function that prints the values of a linked list in an array
*/
 
console.log('\n\n ---------------------------------------------------\n');
console.log('---write a function that prints the values of a linked list in an array .---\n');

let toArrayRecursively = list => {

let myRecurse = (node, myArr) => {

  myArr.push(node.value);

  if(node.next) {
    myRecurse(node.next, myArr)
  }
}

let results = [];
myRecurse(list.head, results);
return results;
}

let toArrayWhileLoop = list => {
  let curr = list.head;
  let result = []
  while( curr.next) {
    result.push(curr.value);
    curr = curr.next;
  }
  // tail:
  result.push(curr.value);

  return result;
}

console.log('\n recurse over the linked list: ');
 let myLLArr1 = toArrayRecursively(myLL3);
 console.log({myLLArr1});

 console.log('\n while loop for the linked list: ');
 let myLLArr2 = toArrayWhileLoop(myLL3);
 console.log({myLLArr2});

/**
* LINKED LISTS Q1) write a function prettyPrint() that recurses to print every value in a linked list
*/
 
console.log('\n\n ---------------------------------------------------\n');
console.log('---write a recursive function to print the values of a linked list .---\n');

let myLL2 = new LinkedList();
let myinput2 = [44, 77, 55, 99, 88, 101, 33, 22];
myinput2.map(e => myLL2.append(e));
let prettyPrint2 = ll => {

  let myRecurse = node => {
  console.log(node.value);
  if(node.next) {
    myRecurse(node.next)
  }
  }

  myRecurse(ll.head);

}

prettyPrint2(myLL2);


/**
* LINKED LISTS Q0) write a function prettyPrint() that uses a while loop to print every value in a linked list
*/

console.log('\n\n ---------------------------------------------------\n');
console.log('---write a function to print the values of a linked list using a while loop. ---\n');

let myLL = new LinkedList();
let myinput = [56,6,17,88,9,947,0,1,14];
myinput.map(e => myLL.append(e));
let prettyPrint = ll => {
  let current = ll.head;
  while( current.next) {
    console.log(current.value);
    current = current.next;
  }
  console.log(current.value);
}

prettyPrint(myLL);



/**
 * Q5) create a function called find that takes an array and a callback and uses reduce to return the first item in the array that the callback returns true
 * 
 * NOTE i think array.filter would be more appropriate for this one.
 */

console.log('\n\n ---------------------------------------------------\n');
console.log('---array reducers take an input function with reducer, element, index, and arry. Here we want to return the first item that a callback returns true. ---\n');


let myArr = [1,2,3,4,5,6,7,45,46,47,48,49,50];

let containsNum10orHigher = num => {return (num >= 10)}

let result;

result = myArr.reduce((reducer=0, current, index, arr) => {
if (containsNum10orHigher(current) && reducer === 0) {
  // just update once for this problem
  reducer = arr[index];
}
return reducer;
}, 0 );

console.log('the first value that is greater than 10 should be 45: ', result);

/**
* practice using the spread operator for function arguments:
*/

console.log('\n\n ---------------------------------------------------\n');
console.log('---practice array reducer---\n');
// example from https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter
// Example: Sum up orbital rocket launches in 2014.
var rockets = [
{ country:'Russia', launches:32 },
{ country:'US', launches:23 },
{ country:'China', launches:16 },
{ country:'Europe(ESA)', launches:7 },
{ country:'India', launches:4 },
{ country:'Japan', launches:3 }
];

var sum = rockets.reduce(function(prevVal, elem) {
  return prevVal + elem.launches;
}, 0);

//ES6 syntax
var sum2 = rockets.reduce((prevVal, elem) => { return prevVal + elem.launches}, 0)

console.log({sum});
console.log({sum2});

console.log('\n ---practice using spread to manage disparte inputs to a function---\n');

function multiplier(...rest) {
  let [a, b] = [...rest];
  return a * b;
}
console.log('despite the extras, this example should be 20: ', multiplier(4,5,6,7));


function logEach2(a, b, ...rest) {
  let myArr = [a, b, ...rest];
  myArr.forEach(function (element) {
      console.log(element);
  });
}

logEach2("a", "b");
console.log('\n');
logEach2("a", "b", "c", "d");

console.log('\n ------------------\n');

function logEach(...things) {
  things.forEach(function (thing) {
      console.log(thing);
  });
}
logEach("a", "b", "c");
console.log('\n');
logEach("a", "b", "c", "d", "e", "f");

console.log('\n\n ---------------------------------------------------\n');
console.log('---function that when invoked calls the callback just once---\n');

/**
* Q4: create a function called once that takes a callback and returns a function that when invoked will only call the callback the first time.
* 
* ideas: 
* 1) return an immediately invoked anonymous version of it.
* 2) add the callback inside the an object (its calling context) which is destroyed after the callback is called. 
*/
let adder = (a,b) => {return a+b;}


console.log('IIEF version: ', (function once2(callback = adder){ let x = callback(40,7); return x;}()));

function once(callback, a, b) {
  let myObj = {
    a : a,
    b : b,
    myCallback : function () { return callback(a,b)}
  }
  
  let myResults = myObj.myCallback(); 
  myObj = {};
  return myResults;
}



let results = once(adder, 40, 7);
console.log('this function creates an object holding the callback, calls it, then destroys the object that contains the callback, before returning the results.');

console.log({results});

console.log('\n\n ---------------------------------------------------\n');
 console.log('---curried add function---\n');
/**
* Q1: create a curied add function that returns a function that adds by a number each time
*/

var curriedAdd = (num1, num2) => {
  return function(num2) {
    return num1 + num2;
  }
}

var addOne = curriedAdd(40);
var addTwo = addOne(47);
var addThree = addOne(3);

console.log({addTwo});
console.log({addThree});

console.log(addOne(7));
console.log(curriedAdd(7)(40));


console.log('\n\n ---------------------------------------------------\n');
console.log('---examples of curried functions---\n');

// examples from https://www.sitepoint.com/currying-in-functional-javascript/:

// non curried traditional function
var greet = function(greeting, name) {
  console.log(greeting + ", " + name);
};
console.log(greet("Hello", "Heidi"));

// curried version:
var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};

var greetHello = greetCurried("hello");
console.log(greetHello('Heidi'));
console.log(greetHello('Bobby'));
console.log(greetCurried('hi there!')('Abby'));

var greetDeeplyCurried = function(greeting) {
  return function(separator) {
    return function(emphasis) {
      return function(name) {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};
var myGreeting = greetDeeplyCurried('Hey Ho!');
var mySeparator = myGreeting(' >>> ');
var myEmphasis = mySeparator('!!!');
var myName = myEmphasis('Dougie');

console.log('\n\n ---------------------------------------------------\n');
console.log('---recursively call callback ---\n');
/**
* Q.0: create a recursive function named loop that takes a count and a callback let loop = (count, callback) => ... and calls the callback count times
*/

let loop = (count, callback) => {
  let sum = 0;
  for (var i = 1; i <= count; i++) {
    sum += callback(i);
  }
  return sum;
}
let doubled = num => {return num * 2};
let evensOnly = num => {return (num % 2 === 0) ? num : 0}
let oddsOnly = num => {return (num % 2 === 0) ? 0 : num}
let doubler = loop(20, doubled);
let addEvensOnly = loop(20, evensOnly);
let addOddsOnly = loop(20, oddsOnly);
console.log({doubler});
console.log({addEvensOnly});
console.log({addOddsOnly});