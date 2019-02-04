'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // return the value of the nodethat is k from the END of the linked list
  ll_kth_from_end(k) {
    if (Number.isInteger(k) && k > -1) {
      let current = this.head;
      let valueArr = [];
      let index = -1;

      // find the last node, which will have a next value of null
      while (current.next) {
        valueArr.push(current.value);
        current = current.next;
        index++;
      }
      if (current.next === null) {
        valueArr.push(current.value);
        index++;
      }

      let finalIndex = (index - k);
      if (Number.isInteger(finalIndex) && finalIndex > -1) {
        return valueArr[finalIndex];
      }
      return false;
    }
  }

  // Append adds a new node to the end of the linked list
  // Big O for time: O(n) -- linear
  // Big O for space O(1)
  append(value) {
    let node = new Node(value);

    // first node for the linked list (e.g. empty ll)
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
    }
    // appending subsequent nodes to the end of the linked list
    let current = this.head;

    // find the last node, which will have a next value of null
    while (current.next) {
      current = current.next;
    }

    // break out of the loop, and the current node's next is null.
    current.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {return null;}

    let current = this.head;
    let second = current.next;

    if (current && second) {
      this.head = second;
      current.next = null;
      this.length--;
    } else if (current && !second) {
      this.head = null;
      this.length = 0;  
    }
    return current;
  }

  peek() {
    let current = (this.head) ? this.head : null;
    if (!current) {return null;}

    while (current.next) {
      current = current.next;
    }
    return current;
  }

  prepend(value) {
    let node = new Node(value);

    //first node for the linked list (e.g. empty ll)
    if (!this.head) {
      this.head = node;
      this.length++;
      return this;
    }

    // prepend node to the head
    let newSecondNode = this.head;
    this.head = node;
    node.next = newSecondNode;
    this.length++;
    return this;
  }

  // deletes the tail (e.g. pop).
  delete() {
    let current = (this.head) ? this.head : null;
    let previous;
    if (!current) {
      this.length = 0;
      return null;
    }

    while (current.next) {
      previous = current;
      current = current.next;
    }
    if(previous && !current.next) {
      previous.next = null; 
      this.tail = previous;
      this.length--;
    }
    else if (!previous && current) {
      this.head = null;
      this.tail = null;
      this.length--;
    }
    return current;
  }

   // remove a node from the linked list
  // Big O for time: O(n)
  // Big O for space O(1)
  remove(offset) {
    let current = this.head;
    let counter = 0;
    let myPrevious;

    if (offset >= 0 && offset <= this.length) {

      // remove the head
      if (current === this.head && counter === offset) {
        this.head = current.next;
        current.next = null;
        this.length--;
        return this;
      }

      // remove one from inside
      while (current.next) {
        if (counter === offset) {
          myPrevious.next = current.next;
          current.next = null;
          this.length--;
          return this;
        }
        myPrevious = current;
        current = current.next;
        counter++;
      }
      // removing the tail
      if (!current.next && counter === offset) {
        myPrevious.next = null;
        this.tail = myPrevious;
        this.length--;
      }
      return this;
    } else {
      return null; // should this throw an error instead?
    }
  }
  
  // insert newValue immediately before the node containing value
  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;
    let previous;

    while(current.next) {
      if (current.value === value){
        // head 
        if (current === this.head) {
          newNode.next = current;
          this.head = newNode;
          this.length++;
          return this;
        }
        // inside
        previous.next = newNode;
        newNode.next = current;
        this.length++;
        return this;
      }
      previous = current;
      current = current.next;
    }
    //tail
    if (current.next === null) {
      if (current.value === value){
        previous.next = newNode;
        newNode.next = current;
        this.length++;
        return this;
      }
    }
    return null;
  }

  // insert newValue immediately after the node containing value
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;

    while(current.next) {
      if (current.value === value){
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return this;
      }
      current = current.next;
    }
    //tail
    if (current.next === null) {
      if (current.value === value){
        newNode.next = null;
        current.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
      }
    }
    return null;
  }
}

module.exports = LinkedList;
