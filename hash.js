'use strict;'
const LinkedList = require('./linked-list.js');

class Hash {

  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  // lose-lose HashCode
  hash(keyString) {
    // console.log({keyString});
    let hash = 0;
    let keyArr = keyString.split("");
    for (var k in keyArr) {
      hash += k.charCodeAt(0);
    }
    console.log('hashed key: ', hash % 37, ' and input key: ', keyString);

    return hash % 37;
  }

  put(key, value) {
    let myHashKey = this.hash(key);

    if (!this.table[myHashKey]) {
      let myLL = new LinkedList();
      this.table[myHashKey] = myLL;
    }
    this.table[myHashKey].append({[key]:value})
  }

  get(key) {
    let myHashKey = this.hash(key);
    if( myHashKey !== undefined && this.table[myHashKey] !== undefined) {

      let current = this.table[myHashKey].head;

      while(current.next) {

        // console.log('this should only log current and next for a collision: ', current, current.next);

        for (var l in current.value) {
          if (l === key){
            return current.value;
          }
        }
        current = current.next;
      }
      for (var l in current.value) {
        if (l === key){
          return current.value;
        }
      }
    }
    return undefined;
  }

  remove(key) {
    let myHashKey = this.hash(key);
    if( myHashKey !== undefined && this.table[myHashKey] !== undefined) {
      let myOffset = 0;
      let myLL = this.table[myHashKey];
      let current = myLL.head;
      while(current.next) {
        for (var l in current.value) {
          if (l === key){
            myLL.remove(myOffset);
            return true;
          }
        }
        myOffset++;
        current = current.next;
      }
      for (var l in current.value) {
        if (l === key){
          myLL.remove(myOffset);
          if (myLL.length === 0) {
            this.table[myHashKey] = undefined; // dont leave an empty LL
          }
          return true;
        }
      }
      return false;
    }
    return undefined;
  }
}

module.exports = Hash;
