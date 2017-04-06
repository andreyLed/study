'use strict';

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const arr = [[1074.1, 1, 1.89786721], [1074, 3, 5.15309], [1073.1, 1, 1], [1072.4, 1, 8.0364], [1070, 3, 13.67518648]]
    const orderList = new OrderList(10);
    arr.forEach(item => {
      orderList.add(item[0], item[2]);
    })

    let currentNode = orderList._first;
    let elements = document.getElementsByClassName('items-wrapper')[0];
    let btn = document.getElementsByClassName('btn-default')[0];
    while (currentNode) {
      const div = document.createElement('div');
      div.className = 'item';
      
      const span = document.createElement('span');
      span.className ='item-text';
      span.textContent = currentNode._price;
      
      const close = document.createElement('a');
      close.className = 'close';
      
      span.appendChild(close);
      div.appendChild(span);
      elements.appendChild(div);
      currentNode = currentNode._next;
    }
    
    btn.addEventListener('click', (event)=>{
      orderList.add()
    })



  })
})()