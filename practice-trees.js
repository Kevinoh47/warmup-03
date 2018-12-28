'use strict';

const {BinarySearchTree} = require('./tree.js');



/*********** 12/22 **********/
/** see index.js **/
const treeTraversal1222 = (tree, myMethod) => {
  let results = [];

  switch (myMethod) 
   {
    case 'inOrder':
      results = tree.inOrder();
      break;
    case 'preOrder':
      results = tree.preOrder();
      break;
    case 'postOrder':
      results = tree.postOrder();
      break;
    case 'levelOrder':
      results = tree.levelOrder();
      break;
    default:
      results = null;
      break;
   }
  
  return results;
}

const treeTraversal = (tree, myMethod) => {
  let results = [];

  if (myMethod === 'inOrder') {
    results = tree.inOrder();
  }
  else if (myMethod === 'preOrder') {
    results = tree.preOrder();
  } 
  else if (myMethod === 'postOrder') {
    results = tree.postOrder();
  } 
  else if (myMethod === 'levelOrder') {
    results = tree.levelOrder();
  } 
  else {
    return null;
  }
  return results;
}

/*********** 12/27 **********/

let stackVals = [11,29,1,13,2,17,3,7,19,23];
let myBST = new BinarySearchTree();
stackVals.map(e => myBST.add(e));

let myInOrderTransveral = treeTraversal1222(myBST, 'inOrder');
let myPreOrderTransveral = treeTraversal1222(myBST, 'preOrder');
let myPostOrderTransveral = treeTraversal1222(myBST, 'postOrder');
let myLevelOrderTransveral = treeTraversal1222(myBST, 'levelOrder');

console.log({myInOrderTransveral});
console.log({myPreOrderTransveral});
console.log({myPostOrderTransveral});
console.log({myLevelOrderTransveral});

module.exports = {treeTraversal1222, treeTraversal};