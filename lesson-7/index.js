'use strict'

/*Поскольку из-за доклада я не сделал задание к сроку, а на лекции ты уже все расскзаал, я решил его все же сделать, но не повторять за тобой
а немного изменить. 
Придумал свою структуру.
Это обычный двусвязный список, состоящий из элементов Order.
Изюминка его в том, что он всегда упорядочен по свойству _price каждого узла.
То есть, если у нас есть список узлов с такими ценами 1,4,6,8 и мы  добавляем новый узел с ценой 3, то он встанет после элемента с ценой 1
Метод удаления удаляет элемент с указанной ценой.

*/
class Order {
  constructor(price, amount) {
    this._price = price;
    this._amount = amount;
    this._next = null;
    this._previous = null;
  }
}

class OrderList {
  constructor(maxOrders) {
    this._first = null;
    this._last = null;
    this._length = 0;
    this._maxOrders = maxOrders;
  }
  
  add(price, amount) {
    const order = new Order(price, amount);

    if (this._length) {
      // если новая цена больше чем последний элемент, вставляем элемент в конец
      if (price > this._last._price) {
        this._last._next = order;
        order._previous = this._last;
        this._last = order;
        this._length += 1;
      }
      // если новая цена меньше чем первый элемент, вставляем в элемент в начало 
      else if (price < this._first._price) {  
        this._first._previous = order;
        order._next = this._first;
        this._first = order;
        this._length += 1;
      } 
      // если новая цена меньше чем первый элемент, вставляем в элемент в начало
      else {
        let currentNode = this._first;
        while (price > currentNode._price) {
          currentNode = currentNode._next;
        }

        if (price === currentNode._price) {
          currentNode._amount = amount;
        } else {
          currentNode._previous._next = order;
          order._previous = currentNode._previous;
          order._next = currentNode;
          currentNode._previous = order;
          this._length += 1;
        }
      }
    } else {
      this._first = order;
      this._last = order;
      this._length += 1;
    }

    if (this._length >= this._maxOrders) {
      this.removeLast()
    }

    return order;
  }
  addFirst(){
    
  }
  removeByValueAll(price){
    
  }
  getCount(){
    
  }
  convertToArray(){
    
  }
  addAfter(){
    
  }

  removeByValue(price) {
    if (price < this._first._price || price > this._last._price) {
      return
    }

    let currentNode = this._first;
    while (currentNode) {
      if (price === currentNode._price) {
        break;
      }
      currentNode = currentNode._next;
    }
    
    //если вообще не нашли узла с такой ценой
    if(!currentNode){
      return;
    }
    
    if (currentNode === this._first) {
      this._first = currentNode._next;
      if (this._first) {
        this._first._previous = null;
      }
    } else if (currentNode === this._last) {
      this._last = this._last._previous;
      this._last._next = null;
    } else {
      currentNode._previous._next = currentNode._next;
      currentNode._next._previous = currentNode._previous;
      currentNode = null;
    }
    this._length -= 1;
  }
  
  
  removeLast() {
    this._last = this._last._previous;
    this._last._next = null;
    this._length -= 1;
  }


  print() {
    let currentNode = this._first;
    const arr = [];
    
    while (currentNode) {
      arr.push([currentNode._price, currentNode._amount]);
      currentNode = currentNode._next;
    }
    
    if(arr.length){
      console.log(arr.toString());
    } else {
      console.log(null);
    }
  }
}

