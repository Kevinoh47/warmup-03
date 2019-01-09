'use strict';

const Node = require('../node.js');
const LinkedList = require('../linked-list.js');
const {Stack, Queue} = require('../stacks-and-queues.js');
const {BinaryTree, BinarySearchTree} = require('../tree.js');

let inputArr = [10,11,12,13,14,15,16,17,18,19,20];
let treeInputArr = [50,1,100,25,75,12,88,44,66]

let myLL = new LinkedList();
let myStack = new Stack();
let myQueue = new Queue();

inputArr.map(e => {
  myStack.push(e);
  myQueue.enqueue(e);
  myLL.append(e);
});

let myBST = new BinarySearchTree();
treeInputArr.map(e => myBST.add(e));

console.log('-----01-09-2018-----\n');
console.log('--------------------');
console.log('--------Trees-------\n\n');

let myOrderedTraversal = myBST.inOrder();
console.log({myOrderedTraversal});

let myPreOrderTraversal = myBST.preOrder();
console.log({myPreOrderTraversal});

let myPostOrderTraversal = myBST.postOrder();
console.log({myPostOrderTraversal});

let myLevelTraversal = myBST.levelOrder();
console.log({myLevelTraversal});



console.log('\n\n');
console.log('--------------------');
console.log('----Linked List-----');
console.log('-------and----------');
console.log('---Stacks & Queues--\n');

let counter = 0, stackResult, queueResult, lLresult;
while (counter < inputArr.length) {
  stackResult = myStack.pop().value;
  queueResult = myQueue.dequeue().value;
  lLresult = myLL.shift().value;
  counter++;
  console.log({stackResult});
  console.log({queueResult});
  console.log({lLresult});
}

