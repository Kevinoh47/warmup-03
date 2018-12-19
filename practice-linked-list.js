const linkedListShiftAll = linkedList => {
  let result = [], shiftedValue;

  while (linkedList.head) {
    shiftedValue = linkedList.shift().value;
    result.push(shiftedValue);
  }
  return result;

}

module.exports = linkedListShiftAll;