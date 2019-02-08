/** 
 * https://github.com/codefellows-seattle-javascript-401n7/class/blob/master/reference/WHITEBOARD-PRACTICE.md
 */
'use strict';
const LinkedList = require('../linked-list');

let myLL3 = new LinkedList();
let myinput3 = [444, 777, 555, 999, 888, 1101, 333, 222, 47, 74, 47, 333, 333];
myinput3.map(e => {
  // console.log('appending to myLL3: ' , e);
  myLL3.append(e);
});

console.log('myLL3 length: ', myLL3.length);
console.log('myLL3 head: ', myLL3.head);
console.log('myLL3 tail: ', myLL3.tail);

console.log('length: ', myLL3.getLength());
console.log('head value: ', myLL3.getHeadValue());
console.log('second node: ', myLL3.getSecond());
console.log('tail value: ', myLL3.getTailValue());


/** LINKED LISTS Q6)
 * write splice for a linked list
 * the array splice method has input params for starting index, delete count, and an indeterminate number of inputs to add. If Delete Count is 0, you should have inputs and just shim them in. Splice operates on the given array.
*/

console.log('\n\n ---------------------------------------------------\n');
console.log('---write splice for a Linked List.---\n');
console.log('---version two: operates on the input LL.---\n');

let splicer = (list, index, deleteCount, ...rest) => {
  let counter, max, additions = [...rest];

  console.log({additions});

  if (deleteCount > 0) {
    counter = index;
    max = index + deleteCount;
    while (counter <= max) {
      list.remove(counter) 
      counter++;
    }
  }
  if (additions.length > 0) {
    counter = 0;
    
    while (counter < additions.length) {
      list.insertBefore(index, additions[counter]);
      counter++;
    }
  }
  return list;
}

let myTestList = new LinkedList();
[1,2,3,4,5,6,7,8,9].map(e => myTestList.append(e));

// just add some more in the middle
splicer(myTestList, 4, 0, 3.2, 3.3, 3.4);
console.log('my TestList should have a new length of 12: ', myTestList.getLength());

console.log('here is my Linked list with additional values that were spliced in: ');
let myCurr = myTestList.head;
while (myCurr.next) {
  console.log(myCurr.value);
  myCurr = myCurr.next;
}
console.log(myCurr.value);



console.log('\n---version one: returns an array with sliced result.---\n');

let listSplice = (list, index, deleteCount, ...rest) => {
  let outputArr = [];
  let output = new LinkedList();

  let curr = list.head;

  // initial populating of array
  while (curr.next){
    outputArr.push(curr.value);
    curr = curr.next;
  }
  outputArr.push(curr.value);
  
  // remove values from output array:
  outputArr.splice(index, deleteCount, ...rest);
  
  return outputArr;
}

console.log(listSplice(myLL3, 4, 1, 111111, 111112));

console.log('\n\n ---------------------------------------------------\n');
console.log('---write a function that finds whether there are any duplicates in a LL. No worries about dup count---\n');

let dupedVals = (list) => {
  let myVals = [];
  let myDups = [];

  let myRecurse = node => {
    let currVal = node.value;
    if (myVals.includes(currVal) && !myDups.includes(currVal)) {
      myDups.push(currVal);
    }
    else {
      myVals.push(currVal);
    }

    if (node.next) {
      myRecurse(node.next);
    }
  }

  myRecurse(list.head);

  return myDups;
}

let myDups2 = dupedVals(myLL3);
console.log({myDups2});

console.log('\n\n ---------------------------------------------------\n');
console.log('---write a function that finds whether there are any duplicates & dup count  in a LL .---\n');

let dupedValCounts = (list) => {
  let myVals = {};

  let myRecurse = node => {
    let currVal = node.value;
    if (myVals[currVal]) {
      myVals[currVal]++;
    }
    else {
      myVals[currVal] = 1;
    }

    if (node.next) {
      myRecurse(node.next);
    }
  }

  myRecurse(list.head);

  let myDups = [];
  for (const [key, val] of Object.entries(myVals)) {
    if (val > 1) { myDups.push({[key]:val})};
  }
  
  return myDups;
}

let myDups = dupedValCounts(myLL3);
console.log({myDups});

/** LINKED LISTS Q3)
 * write a function called contains(list, value) that returns the first node in a linked list that conains a value or null if not found
*/

console.log('\n\n ---------------------------------------------------\n');
console.log('---write a function that finds the first node containing a searched for value .---\n');
let contains = (list, value) => {
  let result = false;

  function myRecurse(node){
  
    // console.log('recursing over node value: ', node.value)

    if (node.value === value) {
      result = node;
      console.log({result})
    } 
    if (node.next && !result) {
      myRecurse(node.next);
    }
    return result;
  }

  let startNode = list.head;
  console.log({startNode})
  let containsResult = myRecurse(startNode, value);
  console.log({containsResult});
  return (containsResult) ? containsResult : null;
}

let result47 = contains(myLL3, 47);
let resultNull = contains(myLL3, -131);
console.log('LL Q3 does LL contain 47? ', result47.value);
console.log('LL Q3 does LL contain -131? ', resultNull);

/**
* LINKED LISTS Q2) write a function that prints the values of a linked list in an array
*/
 
console.log('\n\n ---------------------------------------------------\n');
console.log('---write a function that prints the values of a linked list in an array .---\n');

let toArrayRecursively = list => {

let myRecurse = (node, myArr) => {

  myArr.push(node.value);

  if(node.next) {
    myRecurse(node.next, myArr)
  }
}

let results = [];
myRecurse(list.head, results);
return results;
}

let toArrayWhileLoop = list => {
  let curr = list.head;
  let result = []
  while( curr.next) {
    result.push(curr.value);
    curr = curr.next;
  }
  // tail:
  result.push(curr.value);

  return result;
}

console.log('\n recurse over the linked list: ');
 let myLLArr1 = toArrayRecursively(myLL3);
 console.log({myLLArr1});

 console.log('\n while loop for the linked list: ');
 let myLLArr2 = toArrayWhileLoop(myLL3);
 console.log({myLLArr2});

/**
* LINKED LISTS Q1) write a function prettyPrint() that recurses to print every value in a linked list
*/
 
console.log('\n\n ---------------------------------------------------\n');
console.log('---write a recursive function to print the values of a linked list .---\n');

let myLL2 = new LinkedList();
let myinput2 = [44, 77, 55, 99, 88, 101, 33, 22];
myinput2.map(e => myLL2.append(e));
let prettyPrint2 = ll => {

  let myRecurse = node => {
  console.log(node.value);
  if(node.next) {
    myRecurse(node.next)
  }
  }

  myRecurse(ll.head);

}

prettyPrint2(myLL2);


/**
* LINKED LISTS Q0) write a function prettyPrint() that uses a while loop to print every value in a linked list
*/

console.log('\n\n ---------------------------------------------------\n');
console.log('---write a function to print the values of a linked list using a while loop. ---\n');

let myLL = new LinkedList();
let myinput = [56,6,17,88,9,947,0,1,14];
myinput.map(e => myLL.append(e));
let prettyPrint = ll => {
  let current = ll.head;
  while( current.next) {
    console.log(current.value);
    current = current.next;
  }
  console.log(current.value);
}

prettyPrint(myLL);



/**
 * Q5) create a function called find that takes an array and a callback and uses reduce to return the first item in the array that the callback returns true
 * 
 * NOTE i think array.filter would be more appropriate for this one.
 */

console.log('\n\n ---------------------------------------------------\n');
console.log('---array reducers take an input function with reducer, element, index, and arry. Here we want to return the first item that a callback returns true. ---\n');


let myArr = [1,2,3,4,5,6,7,45,46,47,48,49,50];

let containsNum10orHigher = num => {return (num >= 10)}

let result;

result = myArr.reduce((reducer=0, current, index, arr) => {
if (containsNum10orHigher(current) && reducer === 0) {
  // just update once for this problem
  reducer = arr[index];
}
return reducer;
}, 0 );

console.log('the first value that is greater than 10 should be 45: ', result);

/**
* practice using the spread operator for function arguments:
*/

console.log('\n\n ---------------------------------------------------\n');
console.log('---practice array reducer---\n');
// example from https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter
// Example: Sum up orbital rocket launches in 2014.
var rockets = [
{ country:'Russia', launches:32 },
{ country:'US', launches:23 },
{ country:'China', launches:16 },
{ country:'Europe(ESA)', launches:7 },
{ country:'India', launches:4 },
{ country:'Japan', launches:3 }
];

var sum = rockets.reduce(function(prevVal, elem) {
  return prevVal + elem.launches;
}, 0);

//ES6 syntax
var sum2 = rockets.reduce((prevVal, elem) => { return prevVal + elem.launches}, 0)

console.log({sum});
console.log({sum2});

console.log('\n ---practice using spread to manage disparte inputs to a function---\n');

function multiplier(...rest) {
  let [a, b] = [...rest];
  return a * b;
}
console.log('despite the extras, this example should be 20: ', multiplier(4,5,6,7));


function logEach2(a, b, ...rest) {
  let myArr = [a, b, ...rest];
  myArr.forEach(function (element) {
      console.log(element);
  });
}

logEach2("a", "b");
console.log('\n');
logEach2("a", "b", "c", "d");

console.log('\n ------------------\n');

function logEach(...things) {
  things.forEach(function (thing) {
      console.log(thing);
  });
}
logEach("a", "b", "c");
console.log('\n');
logEach("a", "b", "c", "d", "e", "f");

console.log('\n\n ---------------------------------------------------\n');
console.log('---function that when invoked calls the callback just once---\n');

/**
* Q4: create a function called once that takes a callback and returns a function that when invoked will only call the callback the first time.
* 
* ideas: 
* 1) return an immediately invoked anonymous version of it.
* 2) add the callback inside the an object (its calling context) which is destroyed after the callback is called. 
*/
let adder = (a,b) => {return a+b;}


console.log('IIEF version: ', (function once2(callback = adder){ let x = callback(40,7); return x;}()));

function once(callback, a, b) {
  let myObj = {
    a : a,
    b : b,
    myCallback : function () { return callback(a,b)}
  }
  
  let myResults = myObj.myCallback(); 
  myObj = {};
  return myResults;
}



let results = once(adder, 40, 7);
console.log('this function creates an object holding the callback, calls it, then destroys the object that contains the callback, before returning the results.');

console.log({results});

console.log('\n\n ---------------------------------------------------\n');
 console.log('---curried add function---\n');
/**
* Q1: create a curied add function that returns a function that adds by a number each time
*/

var curriedAdd = (num1, num2) => {
  return function(num2) {
    return num1 + num2;
  }
}

var addOne = curriedAdd(40);
var addTwo = addOne(47);
var addThree = addOne(3);

console.log({addTwo});
console.log({addThree});

console.log(addOne(7));
console.log(curriedAdd(7)(40));


console.log('\n\n ---------------------------------------------------\n');
console.log('---examples of curried functions---\n');

// examples from https://www.sitepoint.com/currying-in-functional-javascript/:

// non curried traditional function
var greet = function(greeting, name) {
  console.log(greeting + ", " + name);
};
console.log(greet("Hello", "Heidi"));

// curried version:
var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};

var greetHello = greetCurried("hello");
console.log(greetHello('Heidi'));
console.log(greetHello('Bobby'));
console.log(greetCurried('hi there!')('Abby'));

var greetDeeplyCurried = function(greeting) {
  return function(separator) {
    return function(emphasis) {
      return function(name) {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};
var myGreeting = greetDeeplyCurried('Hey Ho!');
var mySeparator = myGreeting(' >>> ');
var myEmphasis = mySeparator('!!!');
var myName = myEmphasis('Dougie');

console.log('\n\n ---------------------------------------------------\n');
console.log('---recursively call callback ---\n');
/**
* Q.0: create a recursive function named loop that takes a count and a callback let loop = (count, callback) => ... and calls the callback count times
*/

let loop = (count, callback) => {
  let sum = 0;
  for (var i = 1; i <= count; i++) {
    sum += callback(i);
  }
  return sum;
}
let doubled = num => {return num * 2};
let evensOnly = num => {return (num % 2 === 0) ? num : 0}
let oddsOnly = num => {return (num % 2 === 0) ? 0 : num}
let doubler = loop(20, doubled);
let addEvensOnly = loop(20, evensOnly);
let addOddsOnly = loop(20, oddsOnly);
console.log({doubler});
console.log({addEvensOnly});
console.log({addOddsOnly});