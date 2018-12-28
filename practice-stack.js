const {Stack} = require('./stacks-and-queues.js');

/*********** 12/27 **********/
let myStack = new Stack();
let stackVals = [1,2,3,7,11,13,17,19,23,29];
stackVals.map(e => myStack.push(e));

let currentTail = myStack.peek();

console.log(currentTail);

function pop5(stack) {
  for (let i = 0; i < 5; i++ ) {
    console.log(myStack.peek().value);
    console.log(myStack.pop().value);
  }
};

myStackFunc = (myFunc, myStack) => {
  myFunc(myStack);
};

myStackFunc(pop5, myStack);




/*********** 12/22 **********/
const stackPopAll2 = stack => {
  while(stack.top) {
    console.log(stack.pop().value);
  }
}
const queueDequeueAll2 = myQueue => {
  while(myQueue.front) {
    console.log(myQueue.dequeue().value);
  }
}

/*********** 12-19 ***********/
const stackPopAll = stack => {
  let result = [], poppedValue;
  while (stack.top) {
    poppedValue = stack.pop().value;
    result.push(poppedValue);
  }
  return result;
}

const queueDequeueAll = queue => {
  let result = [], dequeuedValue;
  while (queue.front) {
    dequeuedValue = queue.dequeue().value;
    result.push(dequeuedValue);
  }
  return result;
}

 module.exports = {stackPopAll2, queueDequeueAll2, stackPopAll, queueDequeueAll};
