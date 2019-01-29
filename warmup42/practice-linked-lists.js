'use strict';

const Node = require('../node.js');

class LinkedList2 {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    let myNode = new Node(value);

    if (this.head === null) {
      this.head = myNode;
      this.length = 1;
    }
    else if (this.head) {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = myNode;
      this.length++;
    }
    return this;
  }

  // like removing from the front of a queue
  shift() {
    if (this.head === null) {
      return false;
    }
    let curr = this.head;
    
    if (curr.next) {
      let currSecond = curr.next;
      curr.next = null;
      this.head = currSecond;
    } else {
      this.head = null;
    }
    this.length--;
    return curr;
  }

  // e.g. prepend
  unshift(value) {
    let myNode = new Node(value);
    let curr = (this.head) ? this.head : null;

    if ( curr === null ) {
      this.head = myNode;
      this.length = 1;
    }
    else  {
      this.head = myNode;
      myNode.next = curr;
    }
    this.length++;
    return this;
  }

  // like popping from the end/top of a stack
  delete() {
    let curr = (this.head) ? this.head : null;
    let previous;
    if (curr === null) { return false; }
    else if (curr.next) {
      while (curr.next) {
        previous = curr;
        curr = curr.next;
      }
    }
    if (previous && !curr.next) {
      previous.next = null; // new tail
    }
    else if (!previous && curr) {
      this.head = null;
    }
    this.length--;
    return curr;
  }

  peek() {
    let curr = (this.head) ? this.head : null;

    if (curr === null) {return false;}

    while(curr.next) {
      curr = curr.next;
    }
    return curr;
  }
}

module.exports = LinkedList2;

/***** practice  *****/
console.log('\n --- testing append ---\n');

const myInput = [20, 40, 60, 80, 100, 200, 300, 400];
const myLL = new LinkedList2();

const buildLL = (input, ll) => {
  for (var v of input) {ll.append(v)}
}

buildLL(myInput, myLL);

const pseudoLLIterator = LL => {
  let curr = LL.head;
  if (curr === null ) { return false;}
  if (curr.next) {
    while (curr.next) {
      console.log({curr});
      curr = curr.next;
    }
  }
  console.log({curr});
}

pseudoLLIterator(myLL);

console.log('\n --- testing unshift ---\n');

const moreInput = [10, 0, -10, -20, -30]
const unshifter = (arr, LL) => {
  for (var v of arr) { LL.unshift(v)}
}

unshifter(moreInput, myLL);

pseudoLLIterator(myLL);

console.log('\n\n');

console.log('peeking: ', myLL.peek());

console.log('\n --- testing shift --- \n');

const shifter = LL => {
  let len = LL.length;
  while (len  > 0 ) {
    console.log(LL.shift().value);
    len--;
  }
}

shifter(myLL);

console.log('\n --- building a new LL for one more test --- \n');

const myNewLL = new LinkedList2();
moreInput.map(e => myNewLL.append(e));

pseudoLLIterator(myNewLL);

console.log('\n --- testing delete--- \n');

const deleter = LL => {
  let len = LL.length;
  while (len > 0 ) {
    console.log(LL.delete().value);
    len--;
  }
}

deleter(myNewLL);


