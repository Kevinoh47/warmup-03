'use strict';

const Node = require('./node.js');
const linkedList = require('./linked-list.js');

class Queue {
  constructor () {
    this.front = null;
    this.linkedList = new linkedList();
  }
  
  enqueue(value) {
    if(this.linkedList.length === 0) {
      this.front = new Node(value);
    }
    this.linkedList.append(value);
  }

  dequeue() {
    let dequeued = this.linkedList.shift();
    this.front = this.linkedList.head;
    return dequeued;
  }

  peek() {
    return this.linkedList.head;
  }
}

class Stack {
  constructor () {
    this.top = null;
    this.list = new linkedList();
  }

  push(value) {
    this.list.append(value);
    this.top = new Node(value);
    return this;
  }

  pop() {
    let popped = this.list.delete();
    this.top = this.list.tail;
    return popped;
  }

  peek() {
    // console.log('peeking entire stack list: ', this.list.iterator())
    return this.list.tail;
  }

}

module.exports = {Stack, Queue};
