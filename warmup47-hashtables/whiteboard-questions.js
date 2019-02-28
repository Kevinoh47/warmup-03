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

// let CoinToss = () => {
//   return (Math.floor(Math.random() * 2) === 0) ? '\nheads\n' : '\ntails\n';
// }
// console.log(
//   CoinToss(), 
//   CoinToss(), 
//   CoinToss(), 
//   CoinToss(), 
//   CoinToss()
// );

console.log('\n\n----------------------------------------------');
console.log('Hash Table Q1: write a function that finds the first duplicate letter in a string:\n');

function firstDupLetterFinder(string){

  const myInputArr = string.split('');

  let myHash = new HashMap(myInputArr.length);

  let dupsArr = [];

  myInputArr.map(e => {
    
  
    let output = myHash.add(e, 'letter');

    console.log({'letter': e, 'output': output});

    if( !output ) {
      dupsArr.push(e);
    }
  })

  return (dupsArr.length) ? dupsArr[0] : false ;
}

console.log({'abcdefghijkflmnopm should return f as the first duplicate': firstDupLetterFinder('abcdefghijkflmnopm')});
console.log({'abcdefghijklmnop should return false because no dups': firstDupLetterFinder('abcdefghijklmnop')});

console.log('\n\n----------------------------------------------');
console.log('Hash Table Q0: Write a function that will hash a string into a number with a size limit:\n');

let stringHasher = string => {
  let hashSize = 7;
  let myHash = string.split('').reduce((prev, curr) => prev + curr.charCodeAt(0), 0) % hashSize;

  return myHash;
}

let myHashable = 'Every Good Boy Deserves Fudge';
console.log({ 'Every Good Boy Deserves Fudge': stringHasher(myHashable)});

myHashable = 'every good boy deserves fudge';
console.log({ 'every good boy deserves fudge': stringHasher(myHashable)});

myHashable = 'The quick brown fox jumped over the lazy dog';
console.log({ 'The quick brown fox jumped over the lazy dog': stringHasher(myHashable)});

myHashable = 'Four score and seven years ago';
console.log({ 'Four score and seven years ago': stringHasher(myHashable)});

console.log('\n\n----------------------------------------------');
console.log('BST Q7: Write a function that flattens a bst into a sorted link list:\n');

let tree2list = bstree => {

  let myHash = new HashMap(bstree.count);
  let outputArr = [], outputList = new LinkedList();

  let getNodeVal = node => {
    myHash.add(node.key, 'name');
  }

  bstree.inOrderTraversal(getNodeVal);


  // this gets results but not ordered correctly
  // myHash.keys().map(e => outputList.append(e));

  myHash.keys().map(e => outputArr.push(e));
  outputArr.sort();
  outputArr.map(e=>outputList.append(e));

  return outputList;
}

let myFancyTree = new BSTree();
['mel', 'greg', 'paula', 'al', 'jay', 'yolanda', 'nora'].map(e => myFancyTree.insert(e));

//console.log({'my linked list ' : tree2list(myFancyTree)});
console.log({'my linked list ' : tree2list(myFancyTree).iterator()});

console.log('\n\n----------------------------------------------');
console.log('BST Q4: Write a function that unions two trees:\n');

let treeUnion = (t1, t2) => {
  let myHashMap = new HashMap(t1.count + t2.count);

  let getNodeVal = (node) => {
    return myHashMap.add(node.key, 1);
  }

  t1.inOrderTraversal(getNodeVal);

  t2.inOrderTraversal(getNodeVal);

  return myHashMap.keys();
}

let unionTree1 = new BSTree();
let unionTree2 = new BSTree();
let unionTree3 = new BSTree();
let unionTree4 = new BSTree();

[11, 7, 17, 4, 9, 23, 15].map(e => unionTree1.insert(e));
[11, 8, 17, 3, 5, 9, 22, 15].map(e => unionTree2.insert(e));

['mel', 'gabe', 'nora', 'rachel', 'zach', 'anna'].map(e => unionTree3.insert(e));
['mel', 'bob', 'nora', 'quinn', 'zach', 'carl'].map(e => unionTree4.insert(e));

console.log({'treeUnion should output 3,4,5,7,8,9,11,15,17,22,23, not necessarily in that order': treeUnion(unionTree1, unionTree2)});

console.log('\n ... \n');

console.log({'treeUnion should output mel, bob, gabe, nora, rachel, quinn, zach, carl, anna not necessarily in that order': treeUnion(unionTree3, unionTree4)});


console.log('\n\n----------------------------------------------');
console.log('BST Q2: Write a function that calculates the depth of a BST:\n');

// this one works and is more elegant but how it works eludes me...
let depthTrackerBottomUp = tree => {

  let _depthTracker = node => {

    // leaf node returns 0, and we count up from there...
    if (node === null) {
      return 0;
    }
    
    let left = (_depthTracker(node.left));
    let right = (_depthTracker(node.right));

    console.log({'BOTTOM UP: node key': node.key, 'left depth': left, 'right depth': right});

    return (left > right) ? left + 1 : right + 1;
  }

  return  _depthTracker(tree.root);
}

// I can follow the logic on this version.
let depthTrackerTopDown = tree => {
  
  // if root is the only node, just return 0;
  if (!tree.root || (!tree.root.left && !tree.root.right)) {
    return 0;
  }

  // if any child nodes exist we at least have a depth of 1.
  let maxDepth = 1;

  let _depthTrackerTD = (node, d) => {

    let leftDepth = d;
    let rightDepth = d;

    if (node.left !== null) { _depthTrackerTD(node.left, d+1)}

    if (node.right !== null) { _depthTrackerTD(node.right, d+1)}

    console.log({'TOP DOWN: node key': node.key, 'left depth': leftDepth, 'right depth': rightDepth});

    let currentMaxDepth = (leftDepth > rightDepth) ? leftDepth : rightDepth;

    if (currentMaxDepth > maxDepth) { maxDepth = currentMaxDepth;}
  }

  _depthTrackerTD(tree.root, maxDepth);

  return maxDepth ;
}

let howDeep = new BSTree();
[11,7,15,5,3,9,8,10,13,12,14,20,18,25,30].map(e=> howDeep.insert(e));

console.log({'BOTTOM UP - depth should be 5': depthTrackerBottomUp(howDeep)});

console.log('\n --- \n');

console.log({'TOP DOWN - depth should be 5': depthTrackerTopDown(howDeep)});

console.log('\n\n----------------------------------------------');
console.log('BST Q1: Write a function that calculates the sum of all values in a BST:\n');

let treeSum = bst => {

  // summing treeTotaller is a small refactor over treeVals. No longer need the array reducer. Both ways work.
  // let treeVals = [];
  let treeTotaller = 0;

  // traversal
  function _inOrder(node, callback) {
    if (node.left) { _inOrder(node.left, callback)};

    callback(node);

    if (node.right) { _inOrder(node.right, callback)};

  }

  //callback
  function _pushVal(node) {
    // console.log({'pushing node key': node.key});
    // treeVals.push(node.key); 

    console.log({'node key': node.key, 'current total' : treeTotaller + node.key});
    return treeTotaller = treeTotaller + node.key;
  }

  _inOrder(bst.root, _pushVal);

  // console.log({treeVals});
  // treeTotaller = treeVals.reduce( (p,c) => {return p + c}, 0);

  return treeTotaller;
}

let myTreeToSum = new BSTree();

[11,7,15,5,3,9,8,10,13,12,14,20,18,25].map(e => {
  myTreeToSum.insert(e);
});

console.log({'root':myTreeToSum.getRoot() , 'count':myTreeToSum.getCount(), ' ordered traversal' : myTreeToSum.inOrderTraversal()});

console.log({'total': treeSum(myTreeToSum)});


console.log('\n\n----------------------------------------------');
console.log('BST Q0: Write a function that finds a value in a BST:\n')

let searchBTree = (btree, value) => {

  function _binSearch(node, value) {
    if (node === null) {return false;}

    else if (node.key > value) { 
      return _binSearch(node.left, value);
    }

    else if (node.key < value) {
      return _binSearch(node.right, value);
    }

    else if (node.key === value) {
      return true;
    }
  }

  return _binSearch(btree.root, value);
}

let myTreeOfNames = new BSTree();

['mel', 'cindy', 'rob', 'bob', 'darren', 'zane', 'geoff', 'sarah', 'quinn', 'yolanda', 'kevin', 'jane', 'william', 'julia', 'emily'].map(e => {
  myTreeOfNames.insert(e);
});

console.log({'count' : myTreeOfNames.getCount(), 'root' : myTreeOfNames.getRoot().key});

console.log({'in order traversal': myTreeOfNames.inOrderTraversal()});


console.log({'william is here, expect search to return true': searchBTree(myTreeOfNames,'william')});
console.log({'charlie is not here, expect search to return false': searchBTree(myTreeOfNames,'charlie')});




console.log('\n\n----------------------------------------------');
console.log('BST Q5: Write a function that finds any duplicates between two trees (eg the intersection):\n')

let myT1 = new BSTree(), myT2 = new BSTree();

['mel', 'cindy', 'rob', 'bob', 'zane', 'geoff'].map(e => {
  myT1.insert(e);
});

['mel', 'cindy', 'bill', 'aly', 'terry', 'geoff'].map(e => {
  myT2.insert(e);
});

console.log({'MyT1 count': myT1.getCount(), 'MyT1 root': myT1.getRoot()});

console.log({'MyT2 count': myT2.getCount(), 'MyT2 root': myT2.getRoot()});


let treeDups = ( t1, t2) => {

  let seenAlready = new HashMap(50);
  let myIntersection = [];

  // callback 1
  let getFirstTreeValues = (node) => {
    seenAlready.add(node.key, 1);
  }

  // callback 2
  let testForIntersections = (node) => {
    let added = seenAlready.add(node.key, 2);

    if (!added) {
      myIntersection.push(node.key);
    }
  }

  t1.inOrderTraversal(getFirstTreeValues);

  t2.inOrderTraversal(testForIntersections);

  return (myIntersection.length) ? myIntersection : false
}

const myOrderedT1Output = myT1.inOrderTraversal();
const myOrderedT2Output = myT2.inOrderTraversal();

console.log({myOrderedT1Output});
console.log('\n ... \n')
console.log({myOrderedT2Output});

console.log('\n ... \n')
let myTreeDups = treeDups (myT1, myT2);
console.log({'intersection from the two trees should be mel, cindy, and geoff in no particular order' : myTreeDups});


console.log('\n\n----------------------------------------------');
console.log('Exercising new BSTree Binary Search Tree class implementation:\n')

let myTree = new BSTree();

[11,7,15,5,3,9,8,10,13,12,14,20,18,25].map(e => {
  myTree.insert(e);
});

// callback to pass in to traversal methods:
function printMe(node) {
  return console.log(node.key);
}

console.log({'myTree count should be 14': myTree.getCount()});
console.log({'myTree root should be 11': myTree.getRoot()});
console.log('\n ------ \n')

// binary search:
console.log({'binary search should return true for 14' : myTree.search(14)});
console.log('\n ------ \n')
console.log({'binary search should return false for 1477' : myTree.search(1477)});
console.log('\n ------ \n')

// ordered traversal:
let myInOrderKeysArr = myTree.inOrderTraversal();
console.log({myInOrderKeysArr});
myTree.inOrderTraversal(printMe);
console.log('\n ------ \n')

// pre-ordered traversal:
let myPreOrderKeysArr = myTree.preOrderTraversal();
console.log({myPreOrderKeysArr});
myTree.preOrderTraversal(printMe);
console.log('\n ------ \n')

// post-ordered traversal:
let myPostOrderKeysArr = myTree.postOrderTraversal();
console.log({myPostOrderKeysArr});
myTree.postOrderTraversal(printMe);
console.log('\n ------ \n')

// breadth first traversal:
let myLevelOrderKeysArr = myTree.levelOrderTraversal();
console.log({myLevelOrderKeysArr});
myTree.levelOrderTraversal(printMe);

// maxDepth
console.log({'maxDepth': myTree.maxDepth()});

myTree.insert(30);

console.log({'maxDepth': myTree.maxDepth()});





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
console.log('My HashMap class now supports numeric keys:\n')

let myHashie = new HashMap(1);

myHashie.set(6, 'julia');
myHashie.set(9, 'william');
myHashie.set(2, 'emily');
myHashie.set(54.5, 'dad');
myHashie.set(50.6, 'jane');

console.log(util.inspect(myHashie, {showHidden:false, depth: null}));

console.log({'calling keys method should return all keys': myHashie.keys()});

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
console.log({'calling keys method should return all keys': myHash.keys()});

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


console.log('\n\n---------------STACKS AND QUEUES-------------------\n');
console.log('------------------------------------------------\n');
console.log('---STACKS & QUEUES Q6:  validate a palindrome---\n');

function palindromeChecker(string) {


  let myStringArr = string.split('');
  
  // TODO strip non-alphaNumerics
  // let myfilteredArr = myStringArr.filter(e=> {

  //   if (e matches regex for alphanumeric) {
  //     myfilteredArr.push(e);
  //   }
  // })

  // if reverse is not allowed, we could push onto a stack, then populate the reverse array by popping off the stack;
  let myReverseArr = [...myStringArr].reverse();

  for (var i = 0; i < myStringArr.length; i++) {
    if (myStringArr[i] !== myReverseArr[i]) {
      return false;
    }
  }
  return true;
}

let goodPalin1 = 'abcdefedcba';
let badPalin1 =  'abcdeffdcba'
console.log({'good palindrome should return true': palindromeChecker(goodPalin1)});
console.log({'bad palindrome should return false': palindromeChecker(badPalin1)});

console.log('\n\n--------------------------------------------\n');
console.log('---STACKS & QUEUES Q4:  write a function that determines if a string has matching brases using a stack---\n');

let braceChecker = string => {
  let inputArr = string.split('');
  let leftBraceCount = 0, rightBraceCount = 0;
  let braceStack = new Stack();

  inputArr.map(e => {
    if (e === '[' || e ===']') {
      braceStack.push(e);
    }
  });

  let current;
  while (braceStack.top) {
    current = braceStack.peek();
    
    if (current.value === '[') {
      leftBraceCount++;
    } else if (current.value === ']') { 
      rightBraceCount++;
    }

    if (leftBraceCount === rightBraceCount) {
      leftBraceCount = 0;
      rightBraceCount = 0
    }

    console.log({'current value': current.value, 'left':leftBraceCount, 'right': rightBraceCount});

    // in reality, if right brace is ever ahead of left brace, they can't match. End right there. But we are reversing things via stack, so it is the opposite: left brace cannot be ahead of right brace.
    if (rightBraceCount < leftBraceCount) {
      return false;
    }


    braceStack.pop();
  }

  if (leftBraceCount === rightBraceCount) {
    return true;
  } else {
    return false
  };
}

let matchingBraces = 'hello[] i[ must][[[]be]]going';
let unmatched1 = `${matchingBraces}[...`
let unmatched2 = `${matchingBraces}]...`
console.log({'matching braces': braceChecker(matchingBraces)});
console.log({'unmatched extra right': braceChecker(unmatched1)});
console.log({'unmatched extra left': braceChecker(unmatched2)});

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
console.log('---STACKS & QUEUES Q1:  write a function called reverse(linkedList) that will reverse a linked list using a stack---\n');

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
console.log('---write a recursive function that takes a count and a callback and calls the callback count times ---\n');

function printHello( num ) {
  console.log(`hello world: ${num}` );
}

function callbackCounter(count, callback) {
  
  while (count > 0) {
    _myCallbackCaller(count, callback);
    console.log({'called recursively for count ' : count})
    count--;
  }
  return false;

  function _myCallbackCaller(count, callback) {
    return callback(count);
  }
}

callbackCounter(3, printHello);

console.log('\n\n ---------------------------------------------------\n');
console.log('---write a recursivefunction that prints the fibonacci sequence up to the given number ---\n');

function fibonacciRecurse(desiredLength) { 
  let results = [1,2];

  function myRecurse(currIdx) {

    // base case
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
  // after prepping values for index 0 and 1, we start the recursion with index 2
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

/**NOTE maybe a better approach would have been to get to the tail of LL 1, and set this.next = LL2.head. worth trying! */
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

// slight refactor
let toArrayRecursively2 = list => {
  let results = [];
  let myRecurse = (node) => {

    results.push(node.value);

    if(node.next) {
      myRecurse(node.next)
    }
  }

  myRecurse(list.head);
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

 console.log('\n recurse2 over the linked list: ');
 let myLLArr1a = toArrayRecursively2(myLL3);
 console.log({myLLArr1a});

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