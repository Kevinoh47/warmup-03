'use strict';
const {Stack, Queue} = require('./stacks-and-queues');
const LinkedList = require('./linked-list');

let myList = new LinkedList();

[1,2,3,4,5,6,7,8,9,10,11].map(e => myList.append(e));

console.log('\n ---\n');
console.log ({'iterate my list': myList.iterator()});

console.log('\n ---\n');
// write a function that will remove consecutive dups from a list using a stack
function consecutiveDupRemover(list, removeAllDups = false){
  let curr = list.head, previous = list.head.value, myStack = new Stack(), filtered = [], noDups = [], output = new LinkedList();

  if (list === undefined) {return null;}
  if (list && list.length === 1) {return list};



  function _adjacentNodeComparer(node) {
    if(node.value !== previous.value) {
      myStack.push(node.value);
    }
  }

  // head goes on stack, and we will start iterating from the second element.
  myStack.push(list.head.value);
  curr = curr.next;

  while (curr) {
    _adjacentNodeComparer(curr);
    previous = curr;
    curr = curr.next;
  }

  while (myStack && myStack.top) {
    curr = myStack.pop();
    filtered.push(curr.value);
  }

  if (removeAllDups) {
    filtered.reverse();
    // noDups = filtered.filter(function(elem, pos) { 
    //   return filtered.indexOf(elem) === pos;
    // });
    // refactored
    // noDups = filtered.filter((elem, pos) => { 
    //   return filtered.indexOf(elem) === pos;
    // });
    // refactored again
    noDups = [... new Set(filtered)];

    noDups.map(e => output.append(e));
  } else {
    filtered.reverse().map(e => output.append(e));
  }

  return output;
}

let myConsecutiveDupsTest = new LinkedList();
['a', 'b', 'c', 'c', 'd', 'd', 'd', 'c'].map(e=> myConsecutiveDupsTest.append(e));

console.log({'list to dedup': myConsecutiveDupsTest.iterator()})
console.log({'remove CONSEC dups ONLY': consecutiveDupRemover(myConsecutiveDupsTest).iterator()});

console.log({'remove ALL dups': consecutiveDupRemover(myConsecutiveDupsTest, true).iterator()});

console.log('\n ---\n');
// write a function that will reverse a linked list using a stack

let listReverser = list => {
  let curr = list.head, myStack = new Stack(), output = new LinkedList();

  // handle some edge cases
  if (list === undefined) {return null;}
  if (list.length === 1) {return list;}

  function _listIterator(node, stack) {
    stack.push(node.value);
  }

  while (curr) {
    _listIterator(curr, myStack);
    curr = curr.next;
  }

  while (myStack && myStack.top) {
    curr = myStack.pop().value;
    output.append(curr);
  }

  return output;
}

console.log({'reversed list': listReverser(myList).iterator()});



