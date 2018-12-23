'use strict';

const LinkedList = require('./linked-list.js');
const Node = require('./node.js');
const {Stack, Queue} = require('./stacks-and-queues.js');
const {BinaryTree, BinarySearchTree} = require('./tree.js');
const StackAndQueue = require('./practice-stack.js');
const linkedListShiftAll = require('./practice-linked-list.js');
const treeTraversal = require('./practice-trees.js');


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
let myShiftedLinkList = linkedListShiftAll(myLl);
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




