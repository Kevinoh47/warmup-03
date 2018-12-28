/** 12/22 */
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

/** 12-19 **/
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
