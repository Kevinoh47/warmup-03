'use strict';

const LinkedList = require('./linked-list.js');
const Node = require('./node.js');
const {Stack, Queue} = require('./stacks-and-queues.js');
const {BinaryTree, BinarySearchTree} = require('./tree.js');
const StackAndQueue = require('./practice-stack.js');
const LLMethods = require('./practice-linked-list.js');
const {treeTraversal1222, treeTraversal} = require('./practice-trees.js');


console.log('\n----12-22-2018------\n');
console.log('--------------------\n\n');
console.log('--Stacks & Queues---\n\n');

let inputa1222 = [1,3,5,7,9,11];
let inputb1222 = [2,4,6,8,10,12];
let myStack1222 = new Stack();
let myQueue1222 = new Queue();

inputa1222.map(i => myStack1222.push(i));
inputb1222.map(i => myQueue1222.enqueue(i));

StackAndQueue.stackPopAll2(myStack1222);
console.log('\n--------------------\n');
StackAndQueue.queueDequeueAll2(myQueue1222);

console.log('--------------------\n\n');
console.log('-----LinkedList-----\n\n');

let myLl1222 = new LinkedList();
inputa1222.map(i => myLl1222.append(i));
console.log({myLl1222});
console.log('\n\n');

const myLLMethods = new LLMethods();

console.log(myLLMethods.linkListShiftAll1222(myLl1222));

console.log('--------------------\n\n');
console.log('---------BST--------\n\n');
let bst1222 = new BinarySearchTree();
let input1222 = [11,7,15,5,3,9,8,10,13,12,14,20,18,25,19];
input1222.map(val => bst1222.add(val));

let traversedInOrder1222= treeTraversal1222(bst1222, 'inOrder');
let traversedPreOrder1222= treeTraversal1222(bst1222, 'preOrder');
let traversedPostOrder1222= treeTraversal1222(bst1222, 'postOrder');
let traversedLevelOrder1222= treeTraversal1222(bst1222, 'levelOrder');
console.log({traversedInOrder1222});
console.log({traversedPreOrder1222});
console.log({traversedPostOrder1222});
console.log({traversedLevelOrder1222});
console.log('\n--------------------\n');



console.log('\n----12-19-2018------\n');
console.log('--------------------\n\n');
console.log('--Stacks & Queues---\n\n');

let input1 = [1,3,5,7];
let input2 = [2,4,6,8];
let myStack = new Stack();
let myQueue = new Queue();

input1.map(i => myStack.push(i));
input2.map(i => myQueue.enqueue(i));

console.log({myStack});
console.log({myQueue});

console.log('\n\n');
let poppedStack = StackAndQueue.stackPopAll(myStack);
console.log({poppedStack});

let dequeuedQueue = StackAndQueue.queueDequeueAll(myQueue);
console.log({dequeuedQueue});

console.log('--------------------\n\n');
console.log('-----LinkedList-----\n\n');

let myLl = new LinkedList();
input1.map(i => myLl.append(i));
console.log({myLl});
console.log('\n\n');
let myFatShinyLLMethods = new LLMethods();
let myShiftedLinkList = myFatShinyLLMethods.linkedListShiftAll(myLl);
console.log({myShiftedLinkList});

console.log('--------------------\n\n');
console.log('---------BST--------\n\n');
let bst = new BinarySearchTree();
let input = [11,7,15,5,3,9,8,10,13,12,14,20,18,25,19];
input.map(val => bst.add(val));

let traversedInOrder= treeTraversal(bst, 'inOrder');
let traversedPreOrder= treeTraversal(bst, 'preOrder');
let traversedPostOrder= treeTraversal(bst, 'postOrder');
let traversedLevelOrder= treeTraversal(bst, 'levelOrder');
console.log({traversedInOrder});
console.log({traversedPreOrder});
console.log({traversedPostOrder});
console.log({traversedLevelOrder});




