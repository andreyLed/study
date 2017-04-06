'use strict'

class MyPromise{
  constructor(fn){
    this.state = 'PENDING';
    this.value = null;
    this.handlers = [];
  }
  resolve(data){
    this.state = 'FULFILLED';
    this.value = value;
  }
  reject(err){
    this.state = 'REJECTED';
    this.value = err;
  }
  then(){
    
  }
  catch(){
    
  }
}
