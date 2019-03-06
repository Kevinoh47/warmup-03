'use strict';
const {Stack, Queue, QStack} = require('./stacks-and-queues');
const LinkedList = require('./linked-list');

let myList = new LinkedList();

[1,2,3,4,5,6,7,8,9,10,11].map(e => myList.append(e));

console.log('\n ---\n');
console.log ({'iterate my list': myList.iterator()});

console.log('\n ---\n');
// write a function that implements a stack using queues
// implemented in stacks-and-queues.js

let myQStack = new QStack();

myQStack.push(1);
myQStack.push(2);
myQStack.push(3);
myQStack.push(4);

console.log({'q1Count':myQStack.q1Count, 'q1LastEnqueued': myQStack.q1LastEnqueued, 'q2Count':myQStack.q2Count, 'q2LastEnqueued': myQStack.q2LastEnqueued, 'currentQ':myQStack.currentQ});
console.log('\n ---\n');
console.log({'peek 4': myQStack.peek()});
console.log({'pop 4':myQStack.pop()});
console.log('\n ---\n');
console.log({'q1Count':myQStack.q1Count, 'q1LastEnqueued': myQStack.q1LastEnqueued, 'q2Count':myQStack.q2Count, 'q2LastEnqueued': myQStack.q2LastEnqueued, 'currentQ':myQStack.currentQ});
console.log('\n ---\n');
console.log({'peek 3': myQStack.peek()});
console.log({'pop 3':myQStack.pop()});
console.log('\n ---\n');
console.log({'q1Count':myQStack.q1Count, 'q1LastEnqueued': myQStack.q1LastEnqueued, 'q2Count':myQStack.q2Count, 'q2LastEnqueued': myQStack.q2LastEnqueued, 'currentQ':myQStack.currentQ});
console.log('\n ---\n');
console.log({'peek 2': myQStack.peek()});
console.log({'pop 2': myQStack.pop()});
console.log('\n ---\n');
console.log({'q1Count':myQStack.q1Count, 'q1LastEnqueued': myQStack.q1LastEnqueued, 'q2Count':myQStack.q2Count, 'q2LastEnqueued': myQStack.q2LastEnqueued, 'currentQ':myQStack.currentQ});
console.log('\n ---\n');
console.log({'peek 1': myQStack.peek()});
console.log({'pop 1': myQStack.pop()});
console.log('\n ---\n');
console.log({'q1Count':myQStack.q1Count, 'q1LastEnqueued': myQStack.q1LastEnqueued, 'q2Count':myQStack.q2Count, 'q2LastEnqueued': myQStack.q2LastEnqueued, 'currentQ':myQStack.currentQ});
console.log('\n ---\n');
console.log({'peek none': myQStack.peek()});
console.log({'pop none': myQStack.pop()});
console.log('\n ---\n');
console.log({'q1Count':myQStack.q1Count, 'q1LastEnqueued': myQStack.q1LastEnqueued, 'q2Count':myQStack.q2Count, 'q2LastEnqueued': myQStack.q2LastEnqueued, 'currentQ':myQStack.currentQ});



console.log('\n ---\n');
console.log('\n ---\n');
// write a function that determines if a string has matching braces using a stack

function braceChecker(string) {
  let strArr = string.split('');

  let myStack = new Stack();
  let lCounter = 0, rCounter = 0, noBraces = true;

  for(var e of strArr) {
    if (e === '(') {
      
      lCounter++;
      noBraces = false;
      myStack.push(e);
    }
    else if (e === ')') {
      rCounter++;
      noBraces = false;
      myStack.push(e);
    }
    if (rCounter > lCounter)  {
      return false;
    }
    else if (lCounter === rCounter ) {
      while(myStack & myStack.top ) {
        myStack.pop();
      }
      lCounter = 0;
      rCounter = 0;
    }
  }

  if (noBraces) {return null};

  if (lCounter !== rCounter) { return false}

  return true;
}

let badStr1 = `(hello))(i must be going)`;
let badStr2 = `(hello)(i must be going()`;
let goodStr1 = `(hello)(i must be going)`;

console.log({'checking braces for badStr1':braceChecker(badStr1)});
console.log({'checking braces for badStr2':braceChecker(badStr2)});
console.log({'checking braces for goodStr1':braceChecker(goodStr1)});

console.log('\n ---\n');
// write a function that will remove consecutive dups from a list using a stack
// NOTE I added code to let the user remove ALL dups if desired
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



