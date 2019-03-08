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
    //let popped = this.list.delete();
    let popped = this.peek();
    this.list.delete();
    this.top = this.list.tail;
    return popped;
  }

  peek() {
    // console.log('peeking entire stack list: ', this.list.iterator())
    return this.list.tail;
  }
}

// implement a Stack using queues...
class QStack {
  constructor () {
    this.q1 = new Queue();
    this.q1Count = 0;
    this.q1LastEnqueued = null;
    this.q2 = new Queue();
    this.q2Count = 0;
    this.q2LastEnqueued = null;
    this.currentQ = 1;
  }

  push(value) {
    if (this.currentQ === 1) {
      this.q1.enqueue(value);
      this.q1LastEnqueued = value;
      this.q1Count++;
    } else {
      this.q2.enqueue(value);
      this.q2LastEnqueued = value;
      this.q2Count++;
    }
  }

  pop() {
    let current, popped = null;
    if (this.currentQ === 1) {
      while (this.q1Count > 1) {
        current = this.q1.dequeue().value;
        this.q2.enqueue(current);
        this.q1Count--;
        this.q2Count++;
        this.q2LastEnqueued = current;
      }
      if (this.q1Count === 1) {
        popped = this.q1.dequeue().value;
        this.q1Count = 0;
        this.currentQ = 2;
        this.q1LastEnqueued = null;
      }
    } else {
      while (this.q2Count > 1) {
        current = this.q2.dequeue().value;
        this.q1.enqueue(current);
        this.q2Count--;
        this.q1Count++;
        this.q1LastEnqueued = current;
      }
      if (this.q2Count === 1) {
        popped = this.q2.dequeue().value;
        this.q2Count = 0;
        this.currentQ = 1;
        this.q2LastEnqueued = null;
      }
    }
    return popped;
  }

  peek() {
    if (this.currentQ === 1) {
      return this.q1LastEnqueued;
    } else {
      return this.q2LastEnqueued;
    }
  }
}

module.exports = {Stack, Queue, QStack};
