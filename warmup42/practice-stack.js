'use strict';

const LinkedList = require('../linked-list.js');

class Stack {
  constructor() {
    this.top = null;
    this.LinkedList = new LinkedList();
  }

  push(value) {
    this.LinkedList.append(value);
    let myNode = this.LinkedList.tail;
    this.top = myNode;
  }

  pop() {
    let popped = this.LinkedList.delete();
    this.top = this.LinkedList.tail;
    return popped;
  }

  peek() {
    return this.LinkedList.tail;
  }
}

module.exports = Stack;

/**** practice  *****/
const myInput = [10,20,30,40,50];
const myStack = new Stack();

// myInput.map(e => myStack.push(e));

for (var v of myInput) {myStack.push(v)};

const popAll = stack => {
  while (stack.LinkedList.length) {
    console.log('peeking: ', stack.peek().value);
    console.log(stack.pop().value);
  }
}

popAll(myStack);