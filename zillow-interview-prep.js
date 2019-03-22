// Questions found at https://www.glassdoor.com/Interview/Zillow-Software-Development-Engineer-Interview-Questions-EI_IE40802.0,6_KO7,36.htm

const {Stack, Queue} = require('./stacks-and-queues');

// Name two data structures and where would each one will be used 
/*  Answer:
1) A set is often used to hold unique values. 
2) A Binary Search Tree is used for fast searches -- O(logN).
*/

// Data Structures and Algorithms questions as well as Systems Design and optimizations 

// design a poker. Given cards return result   

//the two phone screens, they are purely technical, and you were tested against one algorithm question in 45 minutes. The algorithm questions are about array.

// tested with algorithm questions, especially in terms of dynamic programming. Please prepare for that. There is even one brain teaser problem, it is about merge sort

//2 rounds are about behaviors. Please better prepare for what you did in your previous employer, why Zillow, your future career plan and so on.

// All in all, all the questions are pretty manageable. Actually Zillow finds culture fit more than skills. Please be prepared in terms of Zillow product and Zillow future.

// two problems, reverse the order of words in a sentence and the second one 4 numbers are missing, find them.

// first try at reversing the order of words in a sentence:
let reverseWordsInASentence = str => {
  let inputArr = str.split(" ");
  inputArr.reverse();
  let output = '';
  for (e of inputArr) {
    output += ` ${e}`;
  }
  return output;
};

// do the same without using an array method.

let reverseWordsInASentence2 = str => { 
  let inputArr = str.split(" ");
  let myStack = new Stack();
  let output = '';
  inputArr.map(e => myStack.push(e));
  while (myStack.top) {
    let curr = myStack.pop().value;
    output += ` ${curr}`;
  }
  return output;
}

console.log('\n ------ reverse the words in a sentence ----- \n');
let mySentence = "The quick brown fox jumped over the lazy dog."
console.log(reverseWordsInASentence(mySentence));
console.log('\n ... \n');
console.log(reverseWordsInASentence2(mySentence));

// traverse a binary tree and append the values to a string, use the string from part 1 to reconstruct the tree, unfortunately it's impossible to reconstruct a binary tree with only post traversal, however you can reconstruct a binary search tree

// How many ways can you represent an amount of money using $1,$5,$10, or $25. 

// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Follow up:
// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum. 

// questions about trees with unconventional structures   

// All the questions were on the medium difficulty level. You can find some of them in the book Elements of programming interviews

// xDetermine if parenthesis in a string all have valid matches

// String, array, bit manipulation questions.

// How would you implement an infinite sized Tic Tac Toe game? How would you check for win conditions? 




