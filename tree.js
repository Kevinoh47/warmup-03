'use strict';

class BtNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
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
    let newNode = new BtNode(key);

    if (this.root === null) {
      this.root = newNode;
      this.count = 1;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {

    if (node.left === null) {
      node.left = newNode;
      this.count++;
    }
    else if (node.right === null) {
      node.right = newNode;
      this.count++;
    }
    else  {
      // https://coderwall.com/p/vcom6g/quick-coin-flip-heads-tails-function-in-javascript
      // if the node is full, pick right or left and continue looking for an available leaf spot.
      const leftOrRight = ((Math.floor(Math.random() * 2) == 0)) ? node.left : node.right;

      this.insertNode(leftOrRight, newNode);
    }
  }

  // orders from smallest to largest in a BST (but not for regular BT)
  inOrder (callback = null) {
    let results = [];

    let _pushResults = function (node) {
      results.push(node.key);
    };

    let _pushNodeResults = function (node) {
      results.push(node);
    };

    if (!callback) {callback = _pushResults;}

    // else if (callback) {callback = _pushNodeResults;}

    let _traversal = (node, callback) => {

      if (node.left) {  _traversal(node.left, callback); }

      callback(node);

      if (node.right) {  _traversal(node.right, callback); }

    };

    _traversal(this.root, callback);

    return results;
  }

  preOrder () {
    let results = [];

    let _traversal = (node) => {

      results.push(node.key);

      if (node.left) { _traversal(node.left); }

      if (node.right) { _traversal(node.right); }
    };

    _traversal(this.root);

    return results;
  }

  postOrder () {
    let results = [];

    let _traversal = (node) => {
      
      if (node.left) { _traversal(node.left);}

      if (node.right) { _traversal(node.right);}

      results.push(node.key);
    };

    _traversal(this.root);

    return results;
  }

  // Breadth first traversal
  levelOrder(printToConsole = false) {
    let results = [];
    let nodeQueue = [];
    nodeQueue.push(this.root);

    while (nodeQueue.length) {
      let current = nodeQueue.shift();
      results.push(current.key);
      if (printToConsole) {
        console.log(current.key);
      }
 
      if (current.left) {
        nodeQueue.push(current.left);
      }
      if(current.right) {
        nodeQueue.push(current.right);
      }
    }

    return results;
  }

  maxVal() {
    let currentMax = this.root.key;
    let result = this.inOrder();
    result.forEach(e => {
      if (e > currentMax) {
        currentMax = e;
      }
    });
    return currentMax;
  }

  minVal() {
    let currentMin = this.root.key;
    let result = this.inOrder();
    result.forEach(e => {
      if(e < currentMin) {
        currentMin = e;
      }
    });
    return currentMin;
  }

}

class BinarySearchTree extends BinaryTree{
  
  insertNode(node, newNode) {
    if (node.key === newNode.key) {
      return;
    }
    else if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
        this.count++;
      }
      else {
        this.insertNode(node.left, newNode);
      }
    }
    else {
      if (node.right === null) {
        node.right = newNode;
        this.count++;
      }
      else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(key){

    let _searchNode = function(node, key) {

      if (node === null) {return false; }

      if (key < node.key) {
        return _searchNode(node.left, key);
      }

      else if (key > node.key) {
        return _searchNode(node.right, key);
      }

      else {
        return node;
      }
    };

    return _searchNode(this.root, key);
  }

  // see Learning JavaScript Data Structures and Algorithms p. 138
  findMaximumValue() {
    let _maxValue = function(node){
      if (node) {
        while (node  && node.right !== null) {
          node = node.right;
        }
        return node.key;
      }
      return null;
    };
    return _maxValue(this.root);

  }

  // see Learning JavaScript Data Structures and Algorithms p. 138
  findMinimumValue() {
    let _minValue = function(node){
      if (node) {
        while (node && node.left !== null) {
          node = node.left;
        }
        return node.key;
      }
      return null;
    };
    return _minValue(this.root);
  }

}

class BSTree {
  constructor() {
    this.root = null,
    this.count = 0
  }

  getCount() {
    return this.count;
  }

  getRoot() {
    return this.root;
  }

  insert(key) {
    let myNode = new BtNode(key);

    if (this.root === null) {
      this.root = myNode;
      this.count = 1;
    } else {
    this.insertNode(this.root, myNode);
    }
  }

  insertNode(node, newNode) {

    // no dups
    if (newNode.key === node.key) {
      return;
    }

    if (newNode.key < node.key) {
      if(node.left === null) {
        node.left = newNode;
        this.count++;
        return;
      } else {
        return this.insertNode(node.left, newNode);
      }
    } else if (newNode.key > node.key) {
      if (node.right === null) {
        node.right = newNode;
        this.count++;
        return;
      } else {
        return this.insertNode(node.right, newNode);
      }
    }
  }

  search (key) {
    console.log({'search key' : key});

    let _binarySearch = (node, key) => {

      console.log({'comparing to node-key': (node && node.key) ? node.key :'missing key'});


      if (node === null) { return false;} 

      else if (key < node.key) {
        return _binarySearch(node.left, key);
      }

      else if (key > node.key) {
        return _binarySearch(node.right, key);
      }

      else if (key === node.key) {
        return true;
      }
    }

    return _binarySearch(this.root, key);
  }

  // breadth first
  levelOrderTraversal(callback = null) {

    let output = [], nodeQ = [], current;

    if (callback === null) {
      callback = node => { output.push(node.key);};
    }

    // start with the root.
    nodeQ.push(this.root);

    while (nodeQ.length) {
      current = nodeQ.shift();

      callback(current);

      if (current.left) { nodeQ.push(current.left); }

      if (current.right) { nodeQ.push(current.right); }
    }

    return (output.length) ? output : null;
  }

  inOrderTraversal(callback = null) {

    let output = [];

    if (callback === null) {
      callback = node => output.push(node.key);
    }

    let _inOrderTraverseNode = (node, callback) => {
      
      if (node.left !== null) {   
        _inOrderTraverseNode(node.left, callback);
      }

      callback(node);

      if (node.right !== null) {  
        _inOrderTraverseNode(node.right, callback);
      }

    }

    _inOrderTraverseNode( this.root, callback);

    return(output.length) ? output : null;
  }

  preOrderTraversal(callback = null) {
    let output = [];

    if( callback === null) {
      callback = node => output.push(node.key);
    }

    let _preOrderTraverseNode = (node, callback) => {

      callback(node);

      if( node.left !== null ) { _preOrderTraverseNode(node.left, callback)}
      
      if( node.right !== null ) { _preOrderTraverseNode(node.right, callback)}

    }

    _preOrderTraverseNode(this.root, callback);

    return (output.length) ? output : null;
  }

  postOrderTraversal(callback = null) {
    let output = [];

    if (callback === null) {
      callback = node => output.push(node.key);
    }

    let _postOrderTraverseNode = (node, callback) => {
      if (node.left !== null) { _postOrderTraverseNode(node.left, callback)}

      if (node.right !== null) { _postOrderTraverseNode(node.right, callback)}

      callback(node);
    }

    _postOrderTraverseNode(this.root, callback);

    return (output.length) ? output : null;
  }

  maxDepth() {

    function _depthFinder(node) {

      //console.log({'depthFinder for node' : node});

      if (node === null) {
        return 0;
      }
      
      let left = _depthFinder(node.left);
      let right = _depthFinder(node.right);

      console.log({'_depthFinder node key' : node.key, 'left':left, 'right': right});

      return  (left > right) ? left+1 : right+1;
    };

    let maxDepth = _depthFinder(this.root);
    return maxDepth;
  }
  
}

module.exports = {BtNode, BinaryTree, BinarySearchTree, BSTree};