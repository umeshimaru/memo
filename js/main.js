'use strict';

document.getElementById('btn').addEventListener('click',()=>{
  const li =document.createElement('li');
  const input =document.querySelector('input');
  li.textContent = input.value;
  li.classList.add('boder');
  document.querySelector('ul').appendChild(li);
  input.value = '' ;
  input.focus();

})