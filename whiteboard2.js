'use strict';
const LinkedList = require('./linked-list');
const Set = require('./set');
const { Stack, Queue } = require('./stacks-and-queues');
const HashMap = require('./hashMap');
const util = require('util');
const {BTNode, BinaryTree, BinarySearchTree, BSTree} = require('./tree');

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

console.log(' play with traversals to try to understand them better.\n');

let mightyTree = new BSTree();
[5,3,8,1,7,2,9].map(e=> mightyTree.insert(e));
let mightyTree2 = new BSTree();
[50, 10, 90, 5, 30, 75, 95, 1, 7, 25, 40, 80, 92, 97].map(e=> mightyTree2.insert(e));

console.log({ 
  'tree root': mightyTree.getRoot().key, 
  'tree count': mightyTree.getCount(), 
  'tree in order': mightyTree.inOrderTraversal()
})

console.log('\n --- --- ---\n');

console.log({ 
  'tree root': mightyTree2.getRoot().key, 
  'tree count': mightyTree2.getCount(), 
  'tree in order': mightyTree2.inOrderTraversal()
})

console.log('\n\n----------------------------------------------');
console.log('test for whether a tree is a binary search tree:\n');

let myRegularTree = new BinaryTree();

let myBSTree = new BSTree();

[5,3,8,1,7,2,9].map(e=> {
  myRegularTree.add(e);
  myBSTree.insert(e);
});

console.log({'reg tree in order': myRegularTree.inOrder()});

console.log({'binary search tree in order': myBSTree.inOrderTraversal()});

function isTreeBSTree(tree) {

  let results = [], previous = null;

  let searchTree = true;

  function _inOrder(node) {
    if (node ) {
      _inOrder(node.left);

      results.push(node.key);

      console.log({results});

      _inOrder(node.right);
    }
    
  }

  _inOrder(tree.root);

  for (let e of results) { 

    if (previous !== null && previous > e) { 
      searchTree = false;
    }

    console.log({'prev':previous, 'e':e,  });

    previous = e;
  };

  return searchTree;
}

console.log({'is my regular tree a Search Tree?': isTreeBSTree(myRegularTree)});
console.log('\n\n');
console.log({'Is my BST a search tree?': isTreeBSTree(myBSTree)});



console.log('\n\n----------------------------------------------');
console.log('write a function that converts a decimal number to binary:\n');

function decimalToBinary (num) {

  let remainderStack = new Stack();
  let remainder = 0, binaryString = '';

  while(num > 0) {
    remainder = Math.floor(num % 2);
    remainderStack.push(remainder);
    num = Math.floor(num / 2 );
    console.log({'remainder': remainder, 'num': num});
  }

  while (remainderStack && remainderStack.list.length > 0) {

    let peeked = remainderStack.peek().value;
    binaryString += peeked;
    remainderStack.pop();
  }

  return binaryString;
}

console.log({'binary 5': decimalToBinary(5)});
console.log({'binary 10': decimalToBinary(10)});
console.log({'binary 15': decimalToBinary(15)});

console.log('\n\n----------------------------------------------');
console.log(' write a function that takes a tree and determines the level of each node.\n');

// let levelChecker = tree => {
// }

console.log('\n\n----------------------------------------------');
console.log(' write a function that takes an input a tree and min/max and returns either min or max value of a tree.\n');

function minMaxFinder (tree, minOrMax)  {

  let result = {};

  if (minOrMax !== 'min' && minOrMax !== 'max') {
    return false;
  }

  if (minOrMax === 'min') {

    function _findMin(node) {


      if ( !node.left ) {
        return node;
      } else {
        return _findMin( node.left );
      }
    }

    result = _findMin(tree.root);

  } else {
    function _findMax(node) {

      if ( !node.right ) {
        return node;
      } else {
        return _findMax( node.right );
      }
    }

    result =_findMax(tree.root);
  }

  return { [minOrMax]: result.key};
}

console.log({'min from BSTree should be 1' : minMaxFinder(myBSTree, 'min')});
console.log({'max from BSTree should be 9' : minMaxFinder(myBSTree, 'max')});

console.log('\n\n----------------------------------------------');
console.log(' write a function that takes a tree and a node value and prints the node  with its immediate parent node key, if it exists.\n');

let nodeParent = (tree, target) => {

  let currentParent = 'none';

  let _search = node => {

    if (node) {
      if ( target === node.key ) {
        return {'parent': currentParent, 'child': target };
      }

      else if ( target < node.key) {
        currentParent = node.key;
        return _search( node.left );
      }

      else if ( target > node.key) {
        currentParent = node.key;
        return _search ( node.right );
      }
    }
    else {
      return false;
    }
  }

  return _search( tree.root );
}

console.log('\n --- \n');
console.log('parent of a particular searched for node');
console.log({'target 2 immediate parent should be 1': nodeParent(myBSTree, 2)});
console.log({'target 7 immediate parent should be 8': nodeParent(myBSTree, 7)});
console.log({'target 5 immediate parent should be none because it is the root': nodeParent(myBSTree, 5)});
console.log({'target 47 immediate parent should be false because it does not exist': nodeParent(myBSTree, 47)}
// TODO should also work for regular (non-BS) tree. Add tests.
);

console.log('\n\n----------------------------------------------');
console.log(' write a function that takes a tree and prints the nodes with parents.\n');

let treeNodeParents = (tree, value) => {

  let keysWithParents = new HashMap(2);

  let _nodeParent = (node) => {

    if (node === tree.root) {
      keysWithParents.add(node.key, 'root - none');
      console.log({'node': tree.root.key, 'parent': 'root - none'});
    }

    if ( node && node.left) { 
      keysWithParents.add(node.left.key, node.key);
      console.log({'node': node.left.key, 'parent': node.key});
      _nodeParent(node.left);
    }

    if ( node && node.right ) { 
      keysWithParents.add(node.right.key, node.key);
      console.log({'node': node.right.key, 'parent': node.key});
      _nodeParent(node.right);
    }
    // else return;
  }

  _nodeParent(tree.root);

  return keysWithParents.map;
}

console.log({'tree in order traversal': myBSTree.inOrderTraversal()});

console.log('\n --- \n');
console.log('nodes & parents');

let outputArr = treeNodeParents(myBSTree);
console.log({outputArr});

console.log('\n --- iterating output via Object.values --- \n');

Object.values(outputArr).map(e => {

  let current = e.head;

  while (current && current.next) {
    console.log({'Node & Parent': current.value});
    current = current.next;
  }
  // tail
  console.log({'Node & Parent': current.value});

  }
);

console.log('\n --- iterating output via value (for of) --- \n');
for (let v of outputArr) {
  if (v !== undefined) {

    let current = v.head;
    while (current && current.next) {
      console.log({'Node & Parent': current.value});
      current = current.next;
    }
    // tail
    console.log({'Node & Parent': current.value});
  }
}

console.log('\n ---  iterating output via index (for in) --- \n');

for (let i in outputArr) {
  if (i !== undefined) {

    console.log({i});
    let current = outputArr[i].head;
    while (current && current.next) {
      console.log({'Node & Parent': current.value});
      current = current.next;
    }
    // tail
    console.log({'Node & Parent': current.value});
  }
}

console.log('\n\n----------------------------------------------');
console.log('EXAM QUESTION: write a function that takes a tree and a number. Number is the "weight" of a leaf. The weight is the sum of all parent values + leaf value. Test for whether that weight exists on the tree.\n');

let leafWeight = (tree, targetWeight) => {

  let results = [];

  let _nodeWeight = (node, currentWeight) => {

    console.log({'node':node.key, 'currWt' : currentWeight});

    if(!node || node === undefined) {
      return false;
    }

    // leaf
    if (!node.left && !node.right) {

      console.log({'LEAF': node.key, 'currentWeight': currentWeight, 'total': currentWeight + node.key});

      if (currentWeight + node.key === targetWeight) {
        results.push(node.key);
      } 
    }
    
    if (node.left) { 
      _nodeWeight(node.left, currentWeight + node.key)
    };

    if (node.right) { 
      _nodeWeight(node.right, currentWeight + node.key)
    }

  }

  // starting weight is 0.
  _nodeWeight(tree.root, 0);

  return (results.length)? results : false;
}

let myWeightTree = new BSTree();
[5,3,8,1,7,2,9].map(e=> myWeightTree.insert(e));

console.log({'tree': myWeightTree.inOrderTraversal(), 'tree root': myWeightTree.getRoot().key})

console.log({'MIN': myWeightTree.getMinValue(), 'MAX': myWeightTree.getMaxValue()});

console.log('\n\n');
console.log({'LEAFWEIGHT 11 SHOULD RETURN 2': leafWeight(myWeightTree, 11)});
console.log({'LEAFWEIGHT 20 SHOULD RETURN 7': leafWeight(myWeightTree, 22)});
console.log({'LEAFWEIGHT 22 SHOULD RETURN 9': leafWeight(myWeightTree, 22)});
console.log({'LEAFWEIGHT 10 SHOULD RETURN FALSE': leafWeight(myWeightTree, 10)});

/** slightly refactored version */

let leafWeight2 = (tree, targetWeight) => {

  let results = [];

  let _nodeWeight = (node, currentWeight) => {

    if( node ) {

      console.log({'node':node.key, 'currWt' : currentWeight});

      if (!node.left && !node.right) {

        console.log({'LEAF': node.key, 'currentWeight': currentWeight, 'total': currentWeight + node.key});

        if (currentWeight + node.key === targetWeight) {
          results.push(node.key);
        } 
      }
    
      _nodeWeight(node.left, currentWeight + node.key)
    
      _nodeWeight(node.right, currentWeight + node.key)
    }
  }

  // starting weight is 0.
  _nodeWeight(tree.root, 0);

  return (results.length) ? results : false;
}

console.log('\n\n');
console.log({'LEAFWEIGHT 11 SHOULD RETURN 2': leafWeight2(myWeightTree, 11)});
console.log({'LEAFWEIGHT 20 SHOULD RETURN 7': leafWeight2(myWeightTree, 22)});
console.log({'LEAFWEIGHT 22 SHOULD RETURN 9': leafWeight2(myWeightTree, 22)});
console.log({'LEAFWEIGHT 10 SHOULD RETURN FALSE': leafWeight2(myWeightTree, 10)});
