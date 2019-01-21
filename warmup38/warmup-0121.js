'use strict'

class BinaryTreeNode {
  constructor(key) {
    this.key=key;
    this.left= null;
    this.right=null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.count = 0;
  }
  
  getTreeCount() {
    return this.count;
  }

  getRootNode() {
    return this.root;
  }

  add(key) {
    const newNode = new BinaryTreeNode(key);

    if(this.root === null){
      this.root = newNode;
      this.count=1;
    }
    else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {

    if(node.left === null) {
      node.left = newNode;
      this.count++;
    }
    else if(node.right === null) {
      node.right = newNode;
      this.count++;
    }
    else {
      (Math.random().toFixed(0) % 2 === 0) ? this.insertNode(node.left, newNode): this.insertNode(node.right, newNode);
    }
  }

  inOrder (node = this.root) {
    let results = [];

    let _traversal = node => {
      if (node.left) {  _traversal(node.left); }

      results.push(node.key);

      if (node.right) {  _traversal(node.right); }
    };

    _traversal(node);

    return results;
  }

  preOrder(node=this.root) {
    let results = [];

    let _traversal = node => {
      results.push(node.key);

      if(node.left) { _traversal(node.left); }
  
      if(node.right) { _traversal(node.right); }
    }

    _traversal(node);

    return results;
  }

  postOrder(node=this.root) {
    let results = [];

    let _traversal = node => {

      if(node.left) { _traversal(node.left); }
  
      if(node.right) { _traversal(node.right); }

      results.push(node.key);
    }

    _traversal(node);

    return results;
  }

  levelOrder(node=this.root) {
    let results = [];
    let myQueueArr = [];

    myQueueArr.push(node);

    while (myQueueArr.length) { 

      let current = myQueueArr.shift();

      results.push(current.key);

      if(current.left) { 
        myQueueArr.push(current.left);
      }

      if(current.right) {
         myQueueArr.push(current.right);
      }
    }

    return results;
  }
}

class BinarySearchTree extends BinaryTree {

  insertNode(node, newNode) {
    // dups go to the left...
    if (newNode.key <= node.key) {
      if (node.left === null) { 
        node.left = newNode;
        this.count++;
      }
      else {
        this.insertNode(node.left, newNode);
      }
    }
    else if (newNode.key > node.key) {
      if(node.right === null) {
        node.right = newNode;
        this.count++;
      }
      else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(key, node=this.root) {

    if (node === null) {return false;}

    if (key < node.key) {
      return this.search(key, node.left);
    }
    else if (key > node.key) {
      return this.search(key, node.right);
    }
    else if (key === node.key) {
      return node;
    }
    else {return false};
  }
}

/** testing trees **/
let myInput = [50, 100, 25, 75, 12, 62, 37, 88]
/*bst1 should look like:
              50
          25        100
        12  37    75 
                62  88
*/
let myInput2 = [50, 100, 25, 75, 12, 6, 4, 5, 3, 62, 37, 88 ]
/*bst2 should look like:
              50
          25        100
        12  37    75 
      6         62  88
    4  
  3  5
*/

console.log('\n\n');
let myBT = new BinaryTree();
let myBST = new BinarySearchTree();
myInput.map(e => {
  myBT.add(e);
  myBST.add(e);
});

console.log('\n\n');
let inOrderBT = myBT.inOrder();
console.log({inOrderBT});

console.log('\n\n');
let inOrderBST = myBST.inOrder();
let preOrderBST = myBST.preOrder();
let postOrderBST = myBST.postOrder();
let levelOrderBST = myBST.levelOrder();

console.log('BST tree count: ', myBST.getTreeCount(), '  root: ', myBST.getRootNode().key);
console.log('does myBST contain 75?', myBST.search(75));
console.log('does myBST contain 62?', myBST.search(62));
console.log('does myBST contain 999?', myBST.search(999));
console.log({inOrderBST});
console.log({preOrderBST});
console.log({postOrderBST});
console.log({levelOrderBST});

console.log('\n\n');
console.log({myInput2})
let myBST2 = new BinarySearchTree();
myInput2.map(e => myBST2.add(e));

let inOrderBST2 = myBST2.inOrder();
let preOrderBST2 = myBST2.preOrder();
let postOrderBST2 = myBST2.postOrder();
let levelOrderBST2 = myBST2.levelOrder();

console.log('BST2 tree count: ', myBST2.getTreeCount(), '  root: ', myBST2.getRootNode().key);
console.log('does myBST2 contain 75?', myBST2.search(75));
console.log('does myBST2 contain 3?', myBST2.search(62));
console.log('does myBST2 contain 999?', myBST2.search(999));
console.log({inOrderBST2});
console.log({preOrderBST2});
console.log({postOrderBST2});
console.log({levelOrderBST2});  


