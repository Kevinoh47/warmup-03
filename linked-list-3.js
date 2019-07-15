'use strict';

class LlNode { 
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

const llNode2 = function(value) {
  this.value = value;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    let newNode = new LlNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return this;

    } else {
      let currentTail = this.tail;
      currentTail.next = newNode;
      this.tail = newNode;
      this.length ++;
      return this;
    }
  }

  // delete tail (pop)
  pop() {
    let current = this.head;
    let previous;

    if (current === undefined) {return null;}

    // head only
    else if (current && current.next === null) {
      console.log('head only, and about to pop it!');
      let popMe = current;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return popMe;
    }
    else if (current && current.next) {
      console.log('about to iterate to pop the tail!');
      // iterate to the tail, but keep track of previous
      while(current.next) {
        previous = current;
        current = current.next;
      }
      // the penultimate node will be the new tail:
      if (previous && current.next === null) {
        let popMe = current;
        previous.next = null;
        this.tail = previous;
        this.length--;
        return popMe;
      }
    }
  }

  // shift removes the head.
  shift() {
    if (this.head === null) {return;}

    let shiftMe = this.head;
    let newHead = (shiftMe.next) ? shiftMe.next : null;

    if (newHead === null) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    else {
      this.head = newHead;
      this.length--;
    }
    shiftMe.next = null;
    return shiftMe;
  }

  // just return tail
  peek()  { return this.tail}

  // remove. offset is similar to index
  remove(offset) {
    if (isNaN(offset) || offset < 0 ) {
      return null;
    }
    // if offset corresponds to tail (or longer), just pop the tail. This should also manage for length of 1.
    else if (offset >= this.length-1 ) {
      let result = this.pop();
      return result;
    }
    else if (this.head  === null) {
      return;
    }
    // remove the head, just shift
    else if (offset === 0) {
      let result = this.shift();
      return result;
    }
    else {
      let current = this.head;
      let counter = 0;
      let previous;
      let result = null;
      while(counter <= offset) {
        if (counter === offset) {
          previous.next = current.next;
          current.next = null;
          result = current;
          this.length--;
          return result;
        }
        previous = current;
        current = current.next;
        counter++;
      }
      return result;
    }
  }
  valueIterator() {

    if (this.head === null) { 
      return null;
    }

    let current = this.head;
    let results = [];

    if (this.length === 1) {
      results.push(this.head.value);
      return results;
    }

    // in theory, this should just be skipped for a ll with just a head
    while(current && current.next) {
      results.push(current.value);
      current = current.next;
    }
    // tail:
    results.push(current.value);

    return results;
  }
}


const myLL = new LinkedList();

myLL.append('one');
myLL.append('two');
myLL.append('three');
myLL.append('four');

console.log(`\n ... linked list is ready ... \n`);

let iterated = myLL.valueIterator();
console.log('ll length: ', myLL.length);
console.log(myLL.head);
console.log(myLL.tail);
console.log({iterated});

console.log(`\n ... pop tail off ... \n`);

let popped = myLL.pop();
console.log({popped})
console.log('ll length: ', myLL.length);
iterated = myLL.valueIterator();
console.log({iterated});

console.log(`\n ... pop new tail off ... \n`);
popped = myLL.pop();
console.log({popped})
console.log('ll length: ', myLL.length);
iterated = myLL.valueIterator();
console.log({iterated});

console.log(`\n ... pop third tail off ... \n`);
popped = myLL.pop();
console.log({popped})
console.log('ll length: ', myLL.length);
iterated = myLL.valueIterator();
console.log({iterated});
console.log('head: ', myLL.head);

console.log(`\n ... pop fourth tail off ... \n`);
popped = myLL.pop();
console.log({popped})
console.log('ll length: ', myLL.length);
iterated = myLL.valueIterator();
console.log({iterated});
console.log('head: ', myLL.head);

console.log(`\n ... pop when there are NO values ... \n`);
popped = myLL.pop();
console.log((popped) ? popped : 'OOPS nothing here');
console.log('ll length: ', myLL.length);
iterated = myLL.valueIterator();
console.log({iterated});


myLL.append('ten');
myLL.append('eleven');
myLL.append('twelve');
myLL.append('thirteen');

console.log(`\n ... linked list is ready again... \n`);
let peeked = myLL.peek();
console.log({peeked});

console.log(`\n ... shift 1 ... \n`); 

let shifted = myLL.shift();
console.log({shifted})
console.log('ll length: ', myLL.length);
iterated = myLL.valueIterator();
console.log({iterated});

console.log(`\n ... shift 2 ... \n`); 

shifted = myLL.shift();
console.log({shifted})
console.log('ll length: ', myLL.length);
iterated = myLL.valueIterator();
console.log({iterated});

console.log(`\n ... shift 3 ... \n`); 

shifted = myLL.shift();
console.log({shifted})
console.log('ll length: ', myLL.length);
iterated = myLL.valueIterator();
console.log({iterated});


console.log(`\n ... peek, then shift 4 ... \n`); 
peeked = myLL.peek();
console.log({peeked});

shifted = myLL.shift();
console.log({shifted})
console.log('ll length: ', myLL.length);
iterated = myLL.valueIterator();
console.log({iterated});

console.log(`\n ... peek, then shift when NO nodes left ... \n`); 
peeked = myLL.peek();
console.log({peeked});
shifted = myLL.shift();
console.log({shifted})
console.log('ll length: ', myLL.length);
iterated = myLL.valueIterator();
console.log({iterated});

myLL.append('100');
myLL.append('101');
myLL.append('102');
myLL.append('103');

console.log(`\n ... linked list is ready again... \n`);
peeked = myLL.peek();
console.log({peeked});

console.log(`\n ... remove index 2 ... \n`); 

let removed = myLL.remove(2);
console.log({removed})
console.log('ll length: ', myLL.length);
iterated = myLL.valueIterator();
console.log({iterated});

console.log(`\n ... remove tail ... \n`); 

removed = myLL.remove(2); 
console.log({removed})
console.log('ll length: ', myLL.length);
iterated = myLL.valueIterator();
console.log({iterated});

console.log(`\n ... remove head ... \n`); 

removed = myLL.remove(0); 
console.log({removed})
console.log('ll length: ', myLL.length);
iterated = myLL.valueIterator();
console.log({iterated});

console.log(`\n ... remove last value ... \n`); 

removed = myLL.remove(47); 
console.log({removed})
console.log('ll length: ', myLL.length);
iterated = myLL.valueIterator();
console.log({iterated});

console.log(`\n ... remove from EMPTY linked list ... \n`); 

removed = myLL.remove(47); 
console.log({removed})
console.log('ll length: ', myLL.length);
iterated = myLL.valueIterator();
console.log({iterated});



