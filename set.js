'use strict';

class Set {
  constructor () {
    this.items = {},
    this.size = 0
  }

  hasBool(value) {
    return !!this.items[value];
  }

  // this returns bool anyway so hasBool isnt needed.
  has(value) {
    return value in this.items;
  }

  has2(value) {
    return this.items.hasOwnProperty(value);
  }

  add(value){
    if(!this.has(value)) {
      this.items[value] = value;
      this.size++;
      return true;
    }
    return false;
  }

  remove(value) {
    if(this.has(value)) { 
      delete this.items[value];
      this.size--;
      return true;
    }
    return false;
  }

  clear() {
    this.items={};
    this.size=0;
    return this.items;
  }

  values() {
    let results = [];
    for(var v of Object.keys(this.items)) {
      results.push(v);
    }
    return results;
  }

  valuesByKey() {
    return Object.keys(this.items);
  }

  valuesByValues() {
    return Object.values(this.items);
  }
  valuesByEntries() {
    return Object.entries(this.items);
  }

  getSize() { return this.size; }
  
  size2() {
    return Object.keys(this.items).length;
  }

  // return an array of all values in 2 sets:
  unionArr(otherSet) {
    let results = this.items.values();
    
    for (var v in OtherSet) {
      if(!this.items.has(k)) {
        results.push(k);
      }
    }
    return results;
  }

  // return a new Set that is the union of two sets:
  unionSet(otherSet) {
    let resultSet = new Set();
    resultSet.items = {...this.items};

    for (var v in otherSet.items) {
      resultSet.add(v);
    }

    return resultSet;
  }

  //return an array of the intersection of this and another set
  intersectionArr(otherSet) {
    let results = [];
    for (var k in this.items) {
      if (otherSet.has(k)) {
        results.push(k);
      }
    }
    return results;
  }

  // return a set of the intersection:
  intersection(otherSet) {
    let results = new Set();
    for (var k in this.items) {
      if (otherSet.has(k)){
        results.add(k);
      }
    }
    return results;
  }

  //difference: what is in this set that isnt in another set?
  difference(otherSet) {
    let results = new Set();
    for (var k in this.items) {
      if (!otherSet.has(k)) {
        results.add(k);
      }
    }
    return results;
  }
}

module.exports = Set;