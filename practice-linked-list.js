const LinkedList = require('./linked-list.js');
class LLMethods {
  constructor () {
    this.linkedList = null;
  }

  linkListShiftAll1222(linkedList) {
    console.log(JSON.stringify(linkedList));
    let shifted;
    while(linkedList.length > 0) {
      shifted = linkedList.shift().value;
      console.log({shifted});
    }
  }

  linkedListShiftAll(linkedList) {
    let result = [], shiftedValue;

    while (linkedList.head) {
      shiftedValue = linkedList.shift().value;
      result.push(shiftedValue);
    }
    return result;

  }
}

module.exports =  LLMethods;

