'use strict';

const util = require('util');
const LinkedList = require('./linked-list');

class hashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((prev, curr) => prev + curr.charCodeAt(0), 0) % this.size;
  }

  // set (or should this be put?) do not protect against duplicate keys.
  set(key, value) {
    let hash = this.hash(key);
    if (!this.map[hash]) { 
      this.map[hash] = new LinkedList(); 
    }
    this.map[hash].append({[key]:value});
  }

  // add protects against adding duplicate keys.
  // returns true if adds it, false if not (because key already exists)
  // if we use add rather than set/put, i think we guarrantee uniqueness of keys.
  add(key, value) {
    let hash = this.hash(key);
    if (!this.map[hash]) { 
      this.map[hash] = new LinkedList(); 
      this.map[hash].append({[key]:value});
      return true;
    }
    // test the list for the key and return false if the key exists, otherwise add key:value
    if (this.map[hash].length) {

      console.log({'COLLISION':key});

      let curr = this.map[hash].head;

      console.log({'HEAD': curr});

  
      while(curr.next) {

        if (Object.keys(curr.value)[0] === key) {
          console.log({'DUPLICATE KEY WILL NOT BE ADDED': key, 'VAL': value})
          return false;
        }
        curr = curr.next;
      }

      // tail
      if (Object.keys(curr.value)[0] === key) {
        console.log({'DUPLICATE KEY WILL NOT BE ADDED': key, 'VAL': value})
        return false;
      }

      // key does not exist so add the key:value and return true;
      this.map[hash].append({[key]:value});
      return true;
    }
  }

  // find returns the value of the given key
  find(key) {
    let hash = this.hash(key);
    let myList = this.map[hash];
    if (!myList) {
      return false;
    }
    if (myList.length === 1) {
      return Object.values(myList.head.value)[0];
    }
    else if (myList.length > 1) {
      let curr = myList.head;
      while(curr.next) {

        if (Object.keys(curr.value)[0] === key) {
          return Object.values(curr.value)[0];
        }
        curr = curr.next;
      }
      // tail:
      if (Object.keys(curr.value)[0] === key) {
        return Object.values(curr.value)[0];
      }
    }
    return false;
  }
}

module.exports = hashMap;

// let myHash = new hashMap(25);
// myHash.set('kevin', 'dad');
// myHash.set('william', 'son');
// myHash.set('julia', 'daughter');
// myHash.set('emily', 'daughter');
// console.log({'DUP-KEY ADD SHOULD RETURN FALSE': myHash.add('kevin','test this should fail')});
// myHash.add('jane', 'mother');
// console.log(util.inspect(myHash, {showHidden:false, depth: null}));