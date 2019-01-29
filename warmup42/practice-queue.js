'use strict';

const LinkedList = require('../linked-list.js');

class Queue {
  constructor () {
    this.front = null;
    this.LinkedList = new LinkedList();
  }

  enqueue(value) {
    this.LinkedList.append(value);
    if (this.front === null) {
      this.front = this.LinkedList.head;
    }
    console.log('enqueued: ', this.LinkedList.tail);
  }

  dequeue() {
    let dequeued = this.LinkedList.shift();
    this.front = (this.LinkedList.head) ? this.LinkedList.head : null
    return dequeued;
  }

  peek() {
    return this.front;
  }

  peekAll() {
    console.log('peeking all... ');
    for (var i = 1; i <  this.LinkedList.length + 1; i++) {
      var len = this.LinkedList.length;
      console.log('peeking at kth from end:' , len-i)
      console.log(this.LinkedList.ll_kth_from_end(len - i));
    }
  }
}

module.exports = Queue;

/**** practice *****/

let myInput = [100,200, 300, 400, 500];
let testLL = new LinkedList();
for (var v of myInput) { 
  console.log('appending: ', v);
  testLL.append(v);
  console.log('new tail: ', testLL.tail);
};

console.log('\n\n');

const pseudoLLIterator = LL => {
  console.log('HEAD: ', LL.head, " TAIL: ", LL.tail);
  let curr = LL.head;
  while(curr.next) {
     console.log({curr});
     curr = curr.next;
  }
  console.log({curr});
}

pseudoLLIterator(testLL);

console.log('\n\n');

console.log('testLL.head: ', testLL.head.value, 'shift: ', testLL.shift());
console.log('testLL.head: ', testLL.head.value, 'shift: ', testLL.shift());
console.log('testLL.head: ', testLL.head.value, 'shift: ', testLL.shift());
console.log('testLL.head: ', testLL.head.value, 'shift: ', testLL.shift());
console.log('testLL.head: ', testLL.head.value, 'shift: ', testLL.shift());

console.log('\n\n');

let myQ = new Queue();
for (var v of myInput) { 
  console.log('enqueueing: ', v);
  myQ.enqueue(v);
};

const deQAll = queue => {
  while ( queue.front ) {
    // console.log('peeking: ', queue.peek());
    console.log(queue.dequeue().value);
  }
};

console.log(myQ.peekAll());

console.log('\n\n');

deQAll(myQ);