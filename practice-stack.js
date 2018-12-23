
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

 module.exports = {stackPopAll, queueDequeueAll};
