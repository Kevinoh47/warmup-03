/** 
 * https://github.com/codefellows-seattle-javascript-401n7/class/blob/master/reference/WHITEBOARD-PRACTICE.md
 */
 'use strict';
 const LinkedList = require('../linked-list');

   /**
  * LINKED LISTS Q2) write a function that prints the values of a linked list in an array
  */
 
 console.log('\n ---write a function that prints the values of a linked list in an array .---\n');

 let myLL3 = new LinkedList();
 let myinput3 = [444, 777, 555, 999, 888, 1101, 333, 222, 47, 74, 47];
 myinput3.map(e => myLL3.append(e));

 let toArray = list => {

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

 let myLLArr = toArray(myLL3);
 console.log({myLLArr});

  /**
  * LINKED LISTS Q1) write a function prettyPrint() that recurses to print every value in a linked list
  */
 
 console.log('\n ---write a recursive function to print the values of a linked list .---\n');

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
 
 console.log('\n ---write a function to print the values of a linked list using a while loop. ---\n');

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

console.log('\n ---array reducers take an input function with reducer, element, index, and arry. Here we want to return the first item that a callback returns true. ---\n');


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
  * 
    practice using the spread operator for function arguments:
  */

console.log('\n ---practice array reducer---\n');
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

console.log('\n ---function that when invoked calls the callback just once---\n');

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

 console.log('\n ---curried add function---\n');
/**
 * 
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


 console.log('\n ---examples of curried functions---\n');

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

console.log('\n ---recursively call callback ---\n');
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