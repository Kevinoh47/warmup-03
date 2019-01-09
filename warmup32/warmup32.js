/** arrays */
const forLoop = arr => {
  for( let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const whileLoop = arr => {
  let counter = 0;
  while (counter < arr.length) {
    console.log(arr[counter]);
    counter++;
  }
}

const map = arr => {
  let results = [];
  arr.map(e => results.push(e));
  return results;
}

const filter = (arr, filterFunc) => {
  return  filterFunc(arr);
}

const evens = arr => {
  let result = [];
  arr.forEach(e => {
    if (e % 2 === 0) {
      result.push(e);
    }
  })
  return result;
}

const doubler = num => num * 2;

// callback takes accumulator, currentValue, currentIndex, and array
/* according to MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

If initialValue is provided in the call to reduce(), then 
   accumulator will be equal to initialValue, and 
   currentValue will be equal to the first value in the array.

If no initialValue is provided, then 
  accumulator will be equal to the first value in the array, and currentValue will be equal to the second
*/
const reducer = (arr, callback, initialValue) => {
  let accumulator = (initialValue !== undefined) ? initialValue : arr[0];
  let preppedArr = (initialValue !== undefined) ? arr : arr.slice(1); //starting current value will be either arr[0] or arr[1]

  console.log('InitialValue: ', initialValue);
  console.log('starting accumulator: ', accumulator);

  preppedArr.forEach((e, i) => {
    accumulator = accumulator + callback(e);
  })
  return accumulator;
}

const myArr = [8,9,10,11,12];

console.log('\nReduce ... doubler with no initial value\n')
const myReducedNoInitialValue = reducer(myArr, doubler);
console.log({myReducedNoInitialValue});

console.log('\nReduce ... doubler with initial value of 1\n')
const myReducedInitialValOf1 = reducer(myArr, doubler, 1);
console.log({myReducedInitialValOf1});

console.log('\nReduce ... doubler with initial value of 0\n')
const myReducedInitialValOfZero = reducer(myArr, doubler, 0);
console.log({myReducedInitialValOfZero});


console.log('\nFilter...\n')
const myEvens = filter(myArr, evens);
console.log({myEvens});

console.log('\nMap...\n')
const myMap = map(myArr)
console.log({myMap});

console.log('\nWhile Loop...\n')
const myWhileLoopVals = whileLoop(myArr);

console.log('\nFor Loop...\n')
const myForLoopVals = forLoop(myArr);



