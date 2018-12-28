'use strict';

const {Queue} = require('./stacks-and-queues.js');

/********* 12/27 **********/ 

let myQueue = new Queue();

let queueVals = [1,2,3,7,11,13,17,19,23,29];

queueVals.map(e => myQueue.enqueue(e));

let dequeueAfew = (queue, number) => {
  let dequeued = []
  while (number > 0) {
    dequeued.push(queue.dequeue().value);
    number--;
  }
  return dequeued;
}

console.log(dequeueAfew(myQueue, 10));
