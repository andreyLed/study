'use strict';

class Queue {
  constructor(maxLength) {
    this._storage = {};
    this._head = 0;
    this._tail = 0;
    this._length = 0;
    this._maxLength = maxLength;
  }
  isEmpty() {
    return this._length < this._maxLength
  }
  isFull() {
    return this._length >= this._maxLength
  }
  enqueue(value) {
    if (this.isEmpty()) {
      this._storage[this._tail] = value;
      this._tail += 1;
      this._length += 1;
      return true;
    }
    return false;
  }

  dequeue() {
    const deletedElement = this._storage[this._head];
    delete this._storage[this._head]
    this._head += 1;
    this._length -=1;
    
    return deletedElement;
  }
}

let q = new Queue(3);
console.log(q.isEmpty());
console.log(q.isFull());
console.log(q.enqueue(1));
console.log(q.enqueue(2));
console.log(q.enqueue(3));
console.log(q.isFull(1));
console.log(q.enqueue(4));


console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.isEmpty(1));
