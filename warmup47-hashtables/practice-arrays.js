'use strict';

console.log('\n --- ARRAYS ----\n')
const daysOfTheWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
console.log({daysOfTheWeek});

console.log('\n --- for loop')
for (var i=0; i < daysOfTheWeek.length; i++) {
  console.log(daysOfTheWeek[i]);
};
console.log('\n --- for of loop')
for (var v of daysOfTheWeek) {
  console.log(v);
}

console.log('\n --- array.forEach')
daysOfTheWeek.forEach(d=>{console.log(d.toLocaleUpperCase());});

console.log('\n --- array.map')
daysOfTheWeek.map(d => {console.log(d.toUpperCase());});

console.log('\n --- Fibonacci sequence')
var fibonacci = [];
fibonacci[1]=1;
fibonacci[2]=2;

for(var i=3; i < 20; i++) {
  fibonacci[i] = fibonacci[i-1]+fibonacci[i-2];
}
console.log({fibonacci});

console.log('\n --- array operations');
let myArr = [0,1,2,3,4,5,6,7,8,9];
myArr.push(10);
myArr.shift();
console.log({myArr});
myArr.unshift(-1);
myArr.pop();
console.log({myArr});
myArr.pop();
myArr.push(11, 12, 13);
myArr.unshift(-4, -3, -2);
console.log({myArr});

console.log('\n --- an iterative way to unshift');
myArr = [];
myArr = [0,1,2,3,4,5,6,7,8,9];
console.log({myArr});
for(var i = myArr.length; i >= 0; i--) {
  myArr[i+1] = myArr[i];
}
myArr[0]=-1;
console.log({myArr});

console.log('\n --- similar operation via shift operator and destructuring');
myArr = [];
myArr = [0,1,2,3,4,5,6,7,8,9];
console.log({myArr});
let myArr2 = [-3,-2,-1, ...myArr];
console.log({myArr2});

console.log('\n --- an iterative way to shift');
myArr = [];
myArr = [0,1,2,3,4,5,6,7,8,9];
for (var i = 0; i < myArr.length; i++) {
  myArr[i] = myArr[i+1];
}
console.log({myArr});

console.log('\n --- slice returns a new array subset of the current array, which stays the same. Notice that the second param is an index value.');
myArr = [0,1,2,3,4,5,6,7,8,9];
console.log({myArr});
let sliced = myArr.slice(3,4);
console.log({sliced});
console.log({myArr});
console.log('\n --- splice removes items from the current array. Notice that the second param is a count of spaces to remove, not an index.');
myArr.splice(3,3);
console.log({myArr});

console.log('\n --- A quick filter example.');
myArr = [0,1,2,3,4,5,6,7,8,9];

let evens = num => (num % 2 === 0) ? true: false;

let myEvens = myArr.filter(evens);

console.log({myEvens});

console.log('\n --- A more involved  filter example. Filter a JSON object returning nonzero, numeric id elements');

var myJSON = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: 'bogus'},
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

let invalidCount = 0;

let isNumber = obj => {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

let filterByID = item => {
  if (isNumber(item.id) && item.id !==0) {return true}
  invalidCount++;
  return false;
}

var arrByValidId = myJSON.filter(filterByID);

console.log({arrByValidId});
console.log({invalidCount});



console.log('\n --- A quick reduce example.');
myArr = [0,1,2,3,4,5,6,7,8,9];
let EvensReducer = (accumulator, num) => (num % 2 === 0) ? num + accumulator: accumulator;
let OddsReducer = (accumulator, num) => (num % 2 !==0 ) ? num + accumulator: accumulator;
let resultEvensNoInitialValue = myArr.reduce(EvensReducer);
let resultEvensInitialValue = myArr.reduce(EvensReducer, 10);
let resultOddsNoInitialValue = myArr.reduce(OddsReducer);
let resultOddsInitialValue = myArr.reduce(OddsReducer, 10);

console.log({resultEvensNoInitialValue});
console.log({resultEvensInitialValue});
console.log({resultOddsNoInitialValue});
console.log({resultOddsInitialValue});

console.log('\n --- An array within an array -- matrix');

let AvgTemps = []
AvgTemps[0]=[45,50];
AvgTemps[1]=[47,49];
AvgTemps[2]=[41,43];
AvgTemps[3]=[45,50];
AvgTemps[4]=[47,49];
AvgTemps[5]=[41,43];
AvgTemps[6]=[41,43];

let printMatrix = myMatrix => {
  for (var i = 0; i <myMatrix.length; i++) {
    for (var j = 0; j <myMatrix[0].length; j++ ) {
      let day;
      switch(i) {
        case 0 : day = 'mon'; break;
        case 1 : day = 'tue'; break;
        case 2 : day = 'wed'; break;
        case 3 : day = 'thu'; break;
        case 4 : day = 'fri'; break;
        case 5 : day = 'sat'; break;
        case 6 : day = 'sun'; break;
      }
      console.log( `${day} hour ${j} temp ${AvgTemps[i][j]}`);
    }
  }
}

console.log(printMatrix(AvgTemps));

console.log('\n --- concat arrays.');

let zero = 0;
let posNums = [1,2,3,4];
let negNums = [-4,-3,-2,-1];
let nums = negNums.concat(zero, posNums);

console.log({nums});

console.log('\n --- spread and destructured version:');

let newNums = [ ...negNums, zero, ...posNums];
console.log({newNums});

console.log('\n --- the .every iterator -- tests that all elements meet or fail a particular test provided by another function');

let areAllMyNumsEven = newNums.every(evens);
console.log({areAllMyNumsEven});

let newEvenArr=[2,4,6,8];
console.log('what about this array of 2,4,6,8?', newEvenArr.every(evens));

console.log('\n --- some iterator, runs until the test turns true');

let allOdds = [1,3,25,27];
console.log('this allOdds array -- does it have any evens?', allOdds.some(evens));
console.log('this newNums array -- does it have any evens?', newNums.some(evens));

console.log('\n --- map iterator');
console.log(newNums.map(evens));
console.log(newNums.map(e =>evens(e)));
console.log('\n --- filter iterator');
console.log(newNums.filter(evens));
console.log(newNums.filter(e =>evens(e)));

console.log('\n --- forEach iterator');
console.log({newNums});

let myForEachEvens = [];
let myForEachEvens2 = [];
newNums.forEach(function(e) { 

  if (e % 2 === 0) {
    myForEachEvens.push(e);
  }
});
console.log({myForEachEvens});
newNums.forEach((e) => { 
  if (e % 2 === 0) {
    myForEachEvens2.push(e);
  }
});
console.log({myForEachEvens2});

console.log('\n --- array sort');

let reversed = newNums.reverse();
console.log({reversed});
console.log('sorted with custom sort function:', newNums.sort(function(a,b) {
  console.log(a, b);
  return a-b;}));

  console.log('\n --- indexOf and lastIndexOf');
  console.log(newNums.indexOf(-1));
  newNums.push(-1);
  console.log(newNums.lastIndexOf(-1));
  newNums.pop();




















