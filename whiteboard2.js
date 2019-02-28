'use strict';
const LinkedList = require('./linked-list');
const Set = require('./set');
const { Stack, Queue } = require('./stacks-and-queues');
const HashMap = require('./hashMap');
const util = require('util');
const {BTNode, BSTree} = require('./tree');

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
console.log('write a function that converts a decimal number to binary:\n');

// function decimalToBinary (num) {

//   let remainderStack = new Stack();
//   let remainder, binaryString;

//   while(num > 0) {
//     remainder = Math.floor(num % 2);
//     remainderStack.push(remainder);
//     num = Math.floor(num /2 );
//   }

//   while (remainderStack.top) {
//     binaryString += remainderStack.pop().toString();
//   }

//   return binaryString;
// }

// let my5 = decimalToBinary(5);
// console.log({'binary 5': my5});

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
